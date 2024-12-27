import React, { useContext } from "react";
import Display from "./Display";
import { Actions, dispatchContext } from "./ComponentA";

export default function Delete({ name, Price, id }) {
  const dispatch = useContext(dispatchContext);
  return (
    <div>
      <br />
      <button
        type="submit"
        onClick={() => {
          dispatch({ type: Actions.del, payload: { id, name, Price } });
        }}
      >
        Delete
      </button>
    </div>
  );
}
