import React, { useEffect, useState } from "react";
import { Card, Avatar, Rate, Typography, notification } from "antd";
import moment from "moment";
import axios from "axios";
import image from "../../assets/images/8fc6b76e48a8a8ab33246dc94c8fecf6.webp"
const { Paragraph } = Typography;

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState({}); // Lưu thông tin người dùng theo userId
  const [loading, setLoading] = useState(true); // Thêm trạng thái loading

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true); // Bắt đầu loading

      try {
        const getAllReview = await axios.get(
          "http://localhost:8000/api/v1/reviews"
        );
        const reviewsData = getAllReview.data.data || [];
        console.log("reviewsData", reviewsData);

        setReviews(reviewsData);

        const userIds = reviewsData.map((review) => review.userID);
        console.log("userIds", userIds);

        const usersData = await Promise.all(
          userIds.map((userId) =>
            axios
              .get(`http://localhost:8000/api/v1/auth/${userId}`)
              .then((response) => ({
                userId,
                fullName: response.data.user.fullName,
                avatar: image, 
              }))
              .catch(() => ({
                userId,
                fullName: "Người dùng không tồn tại",
                avatar: "path/to/default-avatar.png", 
              }))
          )
        );
       console.log(usersData);
       
        const usersInfo = usersData.reduce((acc, user) => {
          acc[user.userId] = {
            fullName: user.fullName,
            avatar: user.avatar,
          };
          return acc;
        }, {});

        setUsers(usersInfo);
      } catch (error) {
        notification.error({
          message: "Thất bại",
          description: "Lấy dữ liệu không thành công",
        });
      } finally {
        setLoading(false); 
      }
    };

    fetchReviews();
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>} 
      {!loading && reviews.length === 0 && <p>Không có đánh giá nào</p>}{" "}
      {!loading &&
        reviews.map((review, index) => {
          const user = users[review.userID] || {
            fullName: "Người dùng không tồn tại",
            avatar: "path/to/default-avatar.png", 
          };

          return (
            <Card key={index} style={{ marginBottom: 16 }}>
              <Card.Meta
                avatar={<Avatar src={user.avatar} alt={user.fullName} />}
                title={user.fullName} 
                description={moment(review.createdDate).fromNow()}
              />
              <Rate disabled value={review.rating} style={{ marginTop: 8 }} />
              <Paragraph style={{ marginTop: 8 }}>{review.body}</Paragraph>
            </Card>
          );
        })}
    </>
  );
};

export default Review;
