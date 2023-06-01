import { useEffect, useState } from "react";
import GetApiData from "../API/API";
import { useParams } from "react-router-dom";

import Navbar from "./components/Navbar";

import "./Itempage.css";
import AuthorCircle from "./components/authorCircle";

function ItemPage({ match, history }) {
  var { id } = useParams("id");
  // const [Book, setBook] = useState([]);
  // const [Author, setAuthor] = useState([]);\

  const [Quantity, setQuantity] = useState([1]);

  var Book;
  // useEffect(() => {
  //   setTimeout(() => {}, 1000);
  // });
  Book = GetApiData("Book/" + id);
  return (
    <>
      <Navbar />

      <div className="itempage-card-wraper ">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{Book?.name}</h5>

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

            <AuthorCircle className="author" authorID={Book?.authorID} />

            <div className="addtocart">
              <p className="card-text price">{Book?.price}.00JD</p>

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
                <button type="butto" className="btn btn-primary counter">
                  {Quantity}
                </button>
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

          <img
            src={"/images/i" + Book?.id + ".jpeg"}
            // src={"/images/i" + "1.jpeg"}
            className="card-img-top"
            alt="..."
          />
        </div>
      </div>
    </>
  );
}
export default ItemPage;
