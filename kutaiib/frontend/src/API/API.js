import { useEffect, useState } from "react";

function GetApiData(url) {
  const [Data, setData] = useState([]);

let getData = async () => {
    let response;
    let data;
    try
    {
      response = await fetch("http://127.0.0.1:8000/api/" + url);
      data = await response.json();

    }catch(e){};

    setData(data);
  };
  return Data;
}
useEffect(() => {
    getData();
}, []);

export default GetApiData;
