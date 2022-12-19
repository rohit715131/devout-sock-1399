import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ quantity, setDecrease, setIncrease }) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <button onClick={() => setDecrease()} style={{ margin: "0px 10px" }}>
          <FaMinus />
        </button>
        <div>{quantity}</div>
        <button onClick={() => setIncrease()} style={{ margin: "0px 10px" }}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
