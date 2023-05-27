import "./App.css";
import Library from "./pages/library";
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

  return <Library data={Data} />;
}

export default App;
