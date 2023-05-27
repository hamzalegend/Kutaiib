import "./Navbar.css";
import imagepath from "./logo512.png";
import searchicon from "./searchicon.png";
function Navbar(props) {
  return (
    <div className="navbar">
      {/* <h1>hello</h1> */}
      <img className="logo" src={imagepath} alt="book img" />

      <div className="searchbar">
        {/* <form action=""> */}
        <img className="searchicon" src={searchicon} alt="" />
        <input type="text" placeholder="Search.." />
        {/* <button type="submit">search</button> */}
        {/* </form> */}
      </div>
    </div>
  );
}

export default Navbar;
