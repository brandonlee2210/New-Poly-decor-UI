import axios from "axios";

export const getCategories = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/v1/categories");

    console.log("response", response);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCommentByProductId = async (id) => {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/v1/comments/byproduct/" + id
    );
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const addNewCategory = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/categories",
      data
    );

    console.log("response", response);

    return response.data;
  } catch (error) {
    console.log(error);
  }
  return null;

  // You may want to handle the error differently depending on your application's requirements
};

export const deleteCategory = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:8000/api/v1/categories/${id}`
    );

    console.log("response", response);

    return response.data;
  } catch (error) {
    console.log(error);
  }
  return null;
  // You may want to handle the error differently depending on your application's requirements
  // For example, you might want to display an error message to the user
};

export const update = async (id, data) => {
  try {
    const response = await axios.put(
      `http://localhost:8000/api/v1/categories/${id}`,
      data
    );

    console.log("response", response);

    return response.data;
  } catch (error) {
    console.log(error);
  }
  return null;
  // You may want to handle the error differently depending on your application's requirements
  // For example, you might want to display an error message to the user
};

export const getProducts = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/v1/variants");

    console.log("response", response);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductsFiltered = async (filter) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/variants/filtered",
      filter
    );
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return null;
  // You may want to handle the error differently depending on your application's requirements
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/v1/variants/${id}`
    );

    return response.data;

    // You can modify the return statement based on your application's requirements,
    // such as returning a specific piece of data or transforming the response data
  } catch (error) {
    console.log(error);
  }
  return null;
  // You may want to handle the error differently depending on your application's requirements
};

export const getOrderDetails = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/v1/orders/${id}`
    );
    console.log("response", response);
    return response.data;
    // You can modify the return statement based on your application's requirements,
    // such as returning a specific piece of data or transforming the response data
  } catch (error) {
    console.log(error);
  }
  return null;
  // You may want to handle the error differently depending on your application's requirements
};

export const getProductsPaginate = async (current, pageSize) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/v1/variants?page=${current}&limit=${pageSize}`
    );

    console.log("response", response);

    return response.data;
  } catch (error) {
    console.log(error);
  }

  // You may want to handle the error differently depending on your application's requirements
};
