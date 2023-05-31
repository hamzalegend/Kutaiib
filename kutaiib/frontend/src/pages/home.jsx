import GetApiData from "../API/API";
import ItemListing from "./components/ItemListing";
import Navbar from "./components/Navbar";

function HomePage(props) {
  let Data = GetApiData("");
  return (
    <>
      <Navbar />
      <h1>home:</h1>
      {Data.map((item, id) => (
        <ItemListing key={id} Item={item} />
      ))}
      {console.log(Data)}
    </>
  );
}

export default HomePage;
