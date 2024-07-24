// CardContext.js
import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);

  const [whistlists, setWhistlists] = useState([]);

  useEffect(() => {
    // Load carts from localStorage on component mount
    const storedCarts = JSON.parse(localStorage.getItem("carts")) || [];
    setCarts(storedCarts);
  }, []);

  // Update localStorage whenever carts change
  // useEffect(() => {
  //   localStorage.setItem("carts", JSON.stringify(carts));
  // }, [carts]);

  // useEffect(() => {
  //   localStorage.setItem("whistlists", JSON.stringify(whistlists));
  // }, [whistlists]);

  const addWhistlist = (newProduct) => {
    // Check if the product already exists in the whistlists array
    const existingWhistlist = whistlists.find(
      (product) => product._id === newProduct._id
    );
    if (existingWhistlist) {
      return;
    }

    // If it doesn't, add the product to the whistlists array
    setWhistlists([...whistlists, newProduct]);

    // Update localStorage
    localStorage.setItem(
      "whistlists",
      JSON.stringify([...whistlists, newProduct])
    );
  };

  const removeWhistlist = (productId) => {
    const updatedWhistlists = whistlists.filter(
      (product) => product._id !== productId
    );
    setWhistlists(updatedWhistlists);
  };

  const addCart = (newCart) => {
    // check if color and material are already
    const existingCartColorMaterial = carts.find(
      (cart) =>
        cart._id === newCart._id &&
        cart.color === newCart.color &&
        cart.material === newCart.material
    );

    // If it does, update the quantity instead of adding a new one
    if (existingCartColorMaterial) {
      existingCartColorMaterial.quantity += newCart.quantity;
      return;
    }

    // If it doesn't, add the new cart to the carts array
    newCart.quantity = 1; // Set initial quantity to 1 for new carts

    setCarts([...carts, newCart]);
    // set to local storage
    localStorage.setItem("carts", JSON.stringify([...carts, newCart]));
  };

  const removeCart = (cardId) => {
    const updatedCarts = carts.filter((card) => card._id !== cardId);
    setCarts(updatedCarts);
  };

  return (
    <CartContext.Provider
      value={{
        carts,
        addCart,
        removeCart,
        whistlists,
        addWhistlist,
        removeWhistlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
