import { useState, useEffect } from "react";

function App() {
  const [todo, usetodo] = useState([]);
  const [isClicked, setIsClicked] = useState(false); // State to trigger the fetch

  useEffect(() => {
    if (isClicked) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => usetodo(data));
    }
  }, [isClicked]);

  return (
    <div className="app-container">
      {todo.map((t) => (
        <div key={t.id} className="user-card">
          <p>{t.name}</p>
          <p>{t.email}</p>
        </div>
      ))}
      <p className="status-text">
        {isClicked
          ? "Data fetched successfully"
          : "To fetch the users data, click on the button below."}
      </p>
      <button className="fetch-button" onClick={() => setIsClicked(true)}>
        Click Me
      </button>
    </div>
  );
}

export default App;
