import GetApiData from "../API/API";
import Cart from "../API/cart";
import Navbar from "./components/Navbar";

import "./Cart.css";

function CartPage(props) {
  let cart = Cart.get();
  const keys = Object.keys(cart);
  let i = 0;
  let items = [];
  for (let key of keys) {
    if (Number(cart[key]) > 0) {
      items[i] = GetApiData("Item/" + key);
      i += 1;
    }
  }
  return (
    <>
      <Navbar />
      <div className="cartTable">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item Name:</th>
              <th scope="col">Quantity:</th>
              <th scope="col">Item Price:</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, id) => (
              <tr>
                {/* <th scope="row">1</th> */}
                <td>{id + 1}</td>
                <td>{item.name}</td>
                <td>{Number(cart[item.id])}</td>
                <td>{item.price}JD</td>
              </tr>
            ))}
          </tbody>
          <thead>
            <tr>
              <th scope="col">Total: </th>
              <th scope="col"></th>
              <th scope="col">{Cart.Count()} </th>
              <th scope="col">{Cart.Total()}</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
}

export default CartPage;
