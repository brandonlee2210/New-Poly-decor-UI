import React, { useState, useEffect } from "react";
import "./Review.css"; // Import the CSS file

// import use param from react dom
import { useParams } from "react-router-dom";

import { createReview, getProductById } from "../api/api";
import { message } from "antd";

const StarRating = ({ rating, onRatingChange }) => {
  const handleClick = (value) => {
    onRatingChange(value);
  };

  const { id } = useParams();

  console.log(id);

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`star ${value <= rating ? "filled" : ""}`}
          onClick={() => handleClick(value)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

const url = "https://api.cloudinary.com/v1_1/deunymbky/image/upload";

const ProductDetail = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();
   console.log(id);
   
  useEffect(() => {
    getProductById(id).then((res) => {
      console.log(res);
      
      setProduct(res);
    });
  }, []);
  return (
    <div className="flex justify-between gap-[30px]">
      <div>
        <img
          src={`${product?.image}`}
          alt="product image"
          style={{ width: 900 }}
        />
        <h2 className="text-3xl font-bold text-brown-strong mt-5">
          {product?.name}
        </h2>
        <div className="mt-[25px]">
          <span className="text-brown-light mr-1">Danh mục:</span>
          {product?.categoryName}
        </div>
        <div className="mt-3 mr-3 text-lg text-brown-light font-semibold">
          Số lượng: {product?.quantity}
        </div>
      </div>
    </div>
  );
};

const Review = () => {
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);
  const [comment, setComment] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [uploading, setUploading] = useState(false);

  const { id } = useParams();

  console.log(rating);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const onUploadImage = async (file) => {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("cloud_name", "deunymbky");
    formData.append("upload_preset", "qtwq9io5");

    const options = {
      method: "POST",
      body: formData,
    };

    try {
      let res = await fetch(url, options);
      let data = await res.json();

      console.log(data);

      if (data.secure_url) {
        setImageLink(data.secure_url);
        setUploading(false);
        return data.secure_url;
      }
    } catch (err) {
      setUploading(false);
      console.log(err);
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setImage(file);
    const secureUrl = await onUploadImage(file);
    setImageLink(secureUrl);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Rating:", rating);
    console.log("Image URL:", imageLink);
    console.log("Comment:", comment);

    // Example of creating a review object
    const review = {
      rating,
      image: imageLink,
      body: comment,
      productID: id,
      createdAt: new Date(),
      updatedAt: new Date(),
      userID: id, // Replace with actual user ID
    };

    // Call the createReview API with the review object
    createReview(review).then((response) => {
      if (response) {
        message.success("Đánh giá thành công");
      }
      console.log("Review submitted:", response);
    });
  };

  return (
    <div className="review-container mt-5">
      <ProductDetail />
      <h2 className="font-bold text-[32px]">Gửi đánh giá sản phẩm</h2>
      <form
        className="review-form"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div>
          <label>Đánh giá:</label>
          <StarRating rating={rating} onRatingChange={handleRatingChange} />
        </div>
        <div>
          <label>Ảnh đánh giá (Nếu có)</label>
          <input type="file" onChange={handleImageChange} />
          {uploading && <div>Đang tải ảnh...</div>}
        </div>
        <div>
          <label>Bình luận:</label>
          <textarea value={comment} onChange={handleCommentChange}></textarea>
        </div>
        <button type="submit">Gửi đánh giá</button>
      </form>
    </div>
  );
};

export default Review;
