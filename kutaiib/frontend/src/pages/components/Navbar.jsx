import Cart from "../../API/cart";
import "./Navbar.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          {/* Navbar */}
          <img className="navbarlogo" src="/images/logo2.jpeg" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">
                <p>Home</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Catigories">
                <p>Catigories</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about-us">
                <p>About Kutaiib</p>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/library">
                    Books
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/bookmarks">
                    Bookmarks
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/Authors">
                    Our Authors
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <form className="search" action="/search">
                <input type="text" placeholder="Search" />
              </form>
            </li>

            <li className="carticon">
              <a href="/cart">
                <img src="/images/shopping-cart.png" alt="" />
                <h2>{Cart.Count()}</h2>
              </a>
              <button onClick={() => Cart.Clear()}>clear</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    /* <form className="d-flex" role="search">
<input
  className="form-control me-2"
  type="search"
  placeholder="Search"
  aria-label="Search"
/>
<button className="btn btn-outline-success" type="submit">
  Search
</button>
</form> */
    // <nav className="navbar bg-body-tertiary">
    //   <div className="container-fluid">
    //     <a className="navbar-brand">Navbar</a>
    //     <div className="collapse navbar-collapse" id="navbarNavDropdown">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Features
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Features
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <form className="d-flex" role="search">
    //       <input
    //         className="form-control me-2"
    //         type="search"
    //         placeholder="Search"
    //         aria-label="Search"
    //       />
    //       <button className="btn btn-outline-success" type="submit">
    //         Search
    //       </button>
    //     </form>
    //   </div>
    // </nav>
  );
}
export default Navbar;
