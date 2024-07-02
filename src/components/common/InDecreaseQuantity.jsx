import React from "react";

const InDecreaseQuantity = (props) => {
  return (
    <div
      className={props.isCart ? "flex items-center" : "mt-5 flex items-center"}
    >
      <span
        onClick={props.decrement}
        className="bg-brown-light text-white w-10 h-10 flex items-center justify-center hover:opacity-70 cursor-pointer"
      >
        <i class="fa-solid fa-minus"></i>
      </span>
      <input
        value={props.quantity}
        type="number"
        className="border-t border-b border-brown-light outline-none w-16 h-10 pl-3 text-center font-semibold"
      />
      <span
        onClick={props.increment}
        className="bg-brown-light text-white w-10 h-10 flex items-center justify-center hover:opacity-70 cursor-pointer"
      >
        <i class="fa-solid fa-plus"></i>
      </span>
    </div>
  );
};

export default InDecreaseQuantity;
