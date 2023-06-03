import { useEffect, useState } from "react";

function GetApiData(url) {
  const [Data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/" + url);
    let data = await response.json();
    setData(data);
  };
  return Data;
}
export default GetApiData;
