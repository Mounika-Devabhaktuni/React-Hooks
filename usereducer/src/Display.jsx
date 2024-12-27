import ComponentA from "./ComponentA";
import React from "react";
import Delete from "./Delete";

export default function Display({ state, dispatch }) {
  return (
    <div>
      <div className="cart-container">
        {state.length === 0 ? (
          <div className="empty-cart">
            <img src="https://via.placeholder.com/150" alt="Empty Cart" />
            <p>Your cart is empty. Start adding items!</p>
          </div>
        ) : (
          state.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-details">
                <p>
                  <strong>Name:</strong> {item.name}
                </p>
                <p>
                  <strong>Price:</strong> ${item.price.toFixed(2)}
                </p>
              </div>
              <div className="delete-button-container">
                <Delete id={item.id} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
