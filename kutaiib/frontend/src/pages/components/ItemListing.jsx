import "./ItemListing.css";

function ItemListing(props) {
  return (
    // <form action={"/Item/" + props.Item.id}>
    //   <button className="ItemListing">
    //     <div className="imageframe">
    //       <center>
    //         <img
    //           className="image"
    //           src={window.location.origin + "/images/testbook.jpg"}
    //           alt="book img"
    //         />
    //       </center>
    //     </div>
    //     <h3 className="name">{props.Item.name}</h3>
    //     <h3 className="price">{props.Item.price} JD</h3>
    //   </button>
    // </form>
    <card>
      <a href={"/Item/" + props.Item.id}>
        <div className="card text-center">
          <img src="/images/testbook.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.Item.name}</h5>
          </div>
        </div>
      </a>
    </card>
  );
}

export default ItemListing;
