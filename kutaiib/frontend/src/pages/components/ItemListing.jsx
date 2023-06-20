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
            <form className="addtocartform" action="/addtocart">
              <button type="button" className=" cartbtn btn ">
                <img src="/images/shopping-cart.png" />
              </button>
            </form>
            <h5 className=" price">{props.Item.price}JD</h5>
          </div>
        </div>
      </a>
    </card>
  );
}

export default ItemListing;
