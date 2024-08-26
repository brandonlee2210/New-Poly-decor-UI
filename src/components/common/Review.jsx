import React, { useEffect, useState } from "react";
import { Card, Avatar, Rate, Typography, notification } from "antd";
import moment from "moment";
import axios from "axios";

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
              .catch(() => ({ data: { userId ,fullName} }))
          )
        );
        console.log(usersData);

        const usersInfo = usersData.reduce((acc, { data }) => {
          if (data.userId) {
            console.log(data);
            console.log(acc);
            
            acc[data.userId] = data.fullName; 
          }
          return acc;
        }, {});
        console.log("usersInfo", usersInfo);

        setUsers(usersInfo);
      } catch (error) {
        notification.error({
          message: "Thất bại",
          description: "Lấy dữ liệu không thành công",
        });
      } finally {
        setLoading(false); // Kết thúc loading
      }
    };

    fetchReviews();
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>} {/* Hiển thị thông báo khi đang tải */}
      {!loading && reviews.length === 0 && <p>Không có đánh giá nào</p>}{" "}
      {/* Thông báo khi không có đánh giá */}
      {!loading &&
        reviews.map((review, index) => {
          const user = users[review.userId] || {
            name: "Người dùng không tồn tại",
            avatar: "path/to/default-avatar.png", // Đường dẫn đến ảnh đại diện mặc định
          };

          return (
            <Card key={index} style={{ marginBottom: 16 }}>
              <Card.Meta
                avatar={<Avatar src={user.avatar} alt={user.name} />}
                title={user.name}
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
