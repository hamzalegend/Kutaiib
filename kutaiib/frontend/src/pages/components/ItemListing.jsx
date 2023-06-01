import "./ItemListing.css";

function ItemListing(props) {
  return (
    <card>
      <a href={"/Item/" + props.Item.id}>
        <div className="card text-center">
          <img
            src={"/images/i" + props.Item.id + ".jpeg"}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.Item.name}</h5>
            <h5 className="card-text price">{props.Item.price}JD</h5>
          </div>
        </div>
      </a>
    </card>
  );
}

export default ItemListing;
