import { useEffect, useState } from "react";

function GetApiData(url) {
  const [Data, setData] = useState([]);

let getData = async () => {
    let response;
    let data;

    try
    {
      response = await fetch("http://hamza2abdelal.pythonanywhere.com/api/" + url);
      data = await response.json();
      setData(data);

		
    }catch(e){};
		
	};

	useEffect(() => {
		getData();
	}, []);

	return Data;
};
export default GetApiData;
