import React, { useState, useReducer, createContext } from "react";
import Display from "./Display";
import Delete from "./Delete";
export const Actions = {
  add: "ADD",
  del: "DEL",
};

export const dispatchContext = createContext();

function reduce(state, action) {
  if (action.type === Actions.add) {
    return [...state, addnew(action.payload.name, action.payload.price)];
  } else if (action.type === Actions.del) {
    const index = state.findIndex((item) => item.id === action.payload.id);
    const updatedArray = [...state.slice(0, index), ...state.slice(index + 1)];
    return updatedArray;
  } else {
    return state;
  }
}

function addnew(name, price) {
  return { id: Date.now(), name: name, price: price };
}

function ComponentA() {
  function handlesubmit(e) {
    e.preventDefault();
    dispatch({ type: Actions.add, payload: { name, price } });
    setName("");
    setPrice("");
  }
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [state, dispatch] = useReducer(reduce, []);
  console.log(state);
  return (
    <div>
      <h1>Add name and price to the cart</h1>
      <form onSubmit={handlesubmit}>
        <h2>Enter the name of the product to cart</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <h2>Enter the name of the price to cart</h2>
        <input
          type="number"
          value={price}
          onChange={(e) => {
            setPrice(parseFloat(e.target.value));
          }}
        />
        <br />
        <br />
        <button type="submit">Click me</button>
      </form>
      <dispatchContext.Provider value={dispatch}>
        <Display state={state} />
      </dispatchContext.Provider>
    </div>
  );
}
export default ComponentA;
