import { useEffect, useState } from "react";

function GetApiData(url) {
  const [Data, setData] = useState([]);

let getData = async () => {
    let response;
    let data;

		console.log("yes");
    try
    {
      response = await fetch("http://hamza2abdelal.pythonanywhere.com/api/" + url);
      data = await response.json();
      setData(data);

		console.log(data);
		
		console.log("Asdsad");
    }catch(e){};
		
		console.log("[ERROR]");
	};

	useEffect(() => {
		getData();
	}, []);

	return Data;
};
export default GetApiData;
