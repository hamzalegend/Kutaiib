import GetApiData from "../API/API";
import ItemListing from "./components/ItemListing";
import Navbar from "./components/Navbar";

function HomePage(props) {
  let Data = GetApiData("");
  
  console.log(Data);
  return (
    <>
      <Navbar />
      {Data.map((item, id) => (
        <ItemListing key={id} Item={item} />
      ))}
    </>
  );
}

export default HomePage;
