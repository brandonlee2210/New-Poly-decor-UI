// CartContext.js
import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);
  const [whistlists, setWhistlists] = useState([]);

  useEffect(() => {
    const storedCarts = JSON.parse(localStorage.getItem("carts")) || [];
    setCarts(storedCarts);
  }, []);

  useEffect(() => {
    const whistlists = JSON.parse(localStorage.getItem("whistlists")) || [];
    setWhistlists(whistlists);
  }, []);

  const addWhistlist = (newProduct) => {
    const existingWhistlist = whistlists.find(
      (product) => product._id === newProduct._id
    );
    if (existingWhistlist) {
      return;
    }
    setWhistlists([...whistlists, newProduct]);
    localStorage.setItem(
      "whistlists",
      JSON.stringify([...whistlists, newProduct])
    );
  };

  const removeAll = () => {
    setCarts([]);
    localStorage.removeItem("carts");
  };

  const removeWhistlist = (productId) => {
    const updatedWhistlists = whistlists.filter(
      (product) => product._id !== productId
    );
    setWhistlists(updatedWhistlists);
  };

  const addCart = (newCart) => {
    const existingCartColorMaterial = carts.find(
      (cart) =>
        cart._id === newCart._id &&
        cart.color === newCart.color &&
        cart.material === newCart.material
    );

    if (existingCartColorMaterial) {
      existingCartColorMaterial.quantity += +newCart.quantity;
      return;
    }

    setCarts([...carts, newCart]);
    localStorage.setItem("carts", JSON.stringify([...carts, newCart]));
  };

  const removeCart = (cartId, color, material) => {
    const updatedCarts = carts.filter(
      (cart) =>
        !(
          cart._id === cartId &&
          cart.color === color &&
          cart.material === material
        )
    );
    setCarts(updatedCarts);
    localStorage.setItem("carts", JSON.stringify(updatedCarts));
  };

  const increaseQuantity = (productId) => {
    const updatedCarts = carts.map((product) => {
      if (product._id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCarts(updatedCarts);
    localStorage.setItem("carts", JSON.stringify(updatedCarts));
  };

  const decreaseQuantity = (productId) => {
    const updatedCarts = carts.map((product) => {
      if (product._id === productId && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setCarts(updatedCarts);
    localStorage.setItem("carts", JSON.stringify(updatedCarts));
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
        increaseQuantity,
        decreaseQuantity,
        removeAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
