import "./ItemListing.css";

import imagepath from "./testbook.jpg";

function ItemListing(props) {
  return (
    <div className="ItemListing">
      <div className="imageframe">
        <center>
          <img className="image" src={imagepath} alt="book img" />
        </center>
      </div>
      <h3 className="name">{props.Item.name}</h3>
      <h3 className="price">{props.Item.price} JD</h3>
    </div>
  );
}

export default ItemListing;
