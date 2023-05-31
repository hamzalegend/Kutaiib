import Navbar from "./components/Navbar";
import "./catigories.css";

function CatigoriesPage(props) {
  return (
    <>
      <Navbar />
      <h1>Catigories:</h1>

      <form action="/home">
        <button className="catigoty" type="submit">
          Home
        </button>
      </form>

      <form action="/library">
        <button className="catigoty" type="submit">
          Books
        </button>
      </form>

      <form action="/bookmarks">
        <button className="catigoty" type="submit">
          Bookmarks
        </button>
      </form>

      <form action="/about-us">
        <button className="catigoty" type="submit">
          About Us
        </button>
      </form>
    </>
  );
}

export default CatigoriesPage;
