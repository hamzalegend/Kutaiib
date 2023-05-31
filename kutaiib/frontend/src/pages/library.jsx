import "../App.css";

import GetApiData from "../API/API";

import Navbar from "./components/Navbar";
import ItemListing from "./components/ItemListing";

function LibraryPage() {
  let Data = GetApiData("books");
  return (
    <>
      <Navbar />
      <div className="library">
        {Data.map((Item, id) => (
          <ItemListing key={id} Item={Item} />
        ))}
        {console.log("Data")};{console.log(Data)};
      </div>
    </>
  );
}

export default LibraryPage;
