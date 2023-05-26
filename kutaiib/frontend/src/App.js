import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let response = await fetch("http://127.0.0.1:8000/");
    let data = await response.json();
    setData(data);
  };

  return (
    <div>
      <h1>Books</h1>
      <h3>id - Item.name Item.ogPrice - Item.price</h3>
      {Data.map((Item, id) => (
        <h3 key={id}>
          {id} - {Item.name} {Item.ogPrice} - {Item.price}
        </h3>
      ))}
    </div>
  );
}

export default App;
