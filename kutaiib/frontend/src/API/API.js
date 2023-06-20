import { useEffect, useState } from "react";

function GetApiData(url) {
  const [Data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let response;
    let data;
    try
    {
      response = await fetch("http://hamza2abdelal.pythonanywhere.com/api/" + url);
      data = await response.json();

    }catch(e){};

    setData(data);
  };
  return Data;
}
export default GetApiData;
