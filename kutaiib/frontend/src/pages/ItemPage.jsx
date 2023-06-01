import { useEffect, useState } from "react";
import GetApiData from "../API/API";
import { useParams } from "react-router-dom";

import Navbar from "./components/Navbar";

import "./Itempage.css";

function ItemPage({ match, history }) {
  let { id } = useParams("id");

  let data = GetApiData("Book/" + id);

  const [Quantity, setQuantity] = useState([0]);
  return (
    <>
      <Navbar />

      {console.log("retrieving from /api/Book/" + id)}
      {console.log(data)}
      {data.authorID}

      <div className="itempage-card-wraper ">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>

            <p className="card-text discription">
              {/* {data.discription} */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium tempore, eveniet nihil possimus provident magnam, modi
              expedita soluta deleniti distinctio ratione et, quae beatae fugit
              reprehenderit ullam. Unde, animi velit!Lorem Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Exercitationem maxime at,
              ullam fuga qui assumenda, rem eaque facilis consequatur illo nam
            </p>
            <hr />
            <div className="addtocart">
              <p className="card-text price">{data.price}.00JD</p>

              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setQuantity(Number(Quantity - 1))}
                >
                  -
                </button>
                <butto type="butto" className="btn btn-primary counter">
                  {Quantity}
                </butto>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setQuantity(Number(Quantity + 1))}
                >
                  +
                </button>
              </div>

              <a href="#" className="btn btn-primary addtocartbtn">
                Add to Cart
              </a>
            </div>
          </div>

          <img src="/images/testbook.jpg" className="card-img-top" alt="..." />
        </div>
      </div>
    </>
  );
}
export default ItemPage;
