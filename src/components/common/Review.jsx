import React from "react";
import { Card, Avatar, Rate, Typography } from "antd";
import moment from "moment";

const { Paragraph } = Typography;

const Review = ({ author, avatar, rating, comment, datetime }) => (
  <Card style={{ marginBottom: 16 }}>
    <Card.Meta
      avatar={<Avatar src={avatar} alt={author} />}
      title={author}
      description={moment(datetime).fromNow()}
    />
    <Rate disabled value={rating} style={{ marginTop: 8 }} />
    <Paragraph style={{ marginTop: 8 }}>{comment}</Paragraph>
  </Card>
);

export default Review;
