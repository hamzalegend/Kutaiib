import "../App.css";
import ItemListing from "./components/ItemListing";
import Navbar from "./components/Navbar";

function Library(props) {
  return (
    <>
      <Navbar />
      <div className="library">
        <h1>Books</h1>
        <h3>id - Item.name Item.ogPrice - Item.price</h3>

        {props.data.map((Item, id) => (
          <ItemListing key={id} Item={Item} />
        ))}
      </div>
    </>
  );
}

export default Library;
