
import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { IoIosStar } from "react-icons/io";
import { TiPlus } from "react-icons/ti";
import { FaMinus } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";

import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart , url } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={url + "/uploads/" + image} alt="" />
        {!cartItems[id] ? (
          <button className="add" onClick={() => addToCart(id)}>
            <TiPlus style={{color : "black"}}/>
          </button>
        ) : (
          <div className="food-item-counter">
            <p>
              <FaMinus
                className="quant-btn-minus"
                onClick={() => removeFromCart(id)}
              />
            </p>
            <p>{cartItems[id]}</p>
            <p>
              <TiPlus
                className="quant-btn-plus"
                onClick={() => addToCart(id)}
              />
            </p>
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <div className="rating">
            <p>
              <IoIosStar style={{ color: "#FFD700" }} />
            </p>
            <p>
              <IoIosStar style={{ color: "#FFD700" }} />
            </p>
            <p>
              <IoIosStar style={{ color: "#FFD700" }} />
            </p>
            <p>
              <IoIosStarOutline style={{ color: "#FFD700" }} />
            </p>
          </div>
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
