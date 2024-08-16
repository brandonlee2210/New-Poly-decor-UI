export const formatCurrency = (value) => {
  return value.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};
