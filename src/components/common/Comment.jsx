import React, { useState } from "react";
import { Avatar, Form, Button, List, Input } from "antd";
import { Comment } from "@ant-design/compatible";
import moment from "moment";

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${
      comments.length > 1 ? "comments" : "comment"
    }`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </>
);

const ProductComment = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "User 1",
      content: <p>Đây là sản phẩm rất tuyệt v��i</p>,
      rating: 5,
      createdAt: "2022-01-01",
      author: "Gia Khánh",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      datetime: moment().fromNow(),
    },
    {
      id: 1,
      name: "User 1",
      content: <p>Đây là sản phẩm rất tuyệt v��i</p>,
      rating: 5,
      createdAt: "2022-01-01",
      author: "Gia Bảo",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      datetime: moment().fromNow(),
    },
    {
      id: 1,
      name: "User 1",
      content: <p>Sản phẩm như loz què</p>,
      rating: 5,
      createdAt: "2022-01-01",
      author: "Trần Vỹ",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      datetime: moment().fromNow(),
    },
  ]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value) return;

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setComments([
        ...comments,
        {
          author: "User Name",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          content: <p>{value}</p>,
          datetime: moment().fromNow(),
        },
      ]);
      setValue("");
    }, 1000);
  };

  console.log(comments);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      {comments.length > 0 && <CommentList comments={comments} />}
      <Comment
        avatar={
          <Avatar
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User Name"
          />
        }
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
          />
        }
      />
    </>
  );
};

export default ProductComment;
