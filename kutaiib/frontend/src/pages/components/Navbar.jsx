import "./Navbar.css";

function Navbar(props) {
  return (
    // <div className="navbar">
    //   {/* <h1>hello</h1> */}
    //   <img
    //     className="logo"
    //     src={window.location.origin + "/images/logo512.png"}
    //     alt="book img"
    //   />

    //   <div className="searchbar">
    //     {/* <form action=""> */}
    //     <img
    //       className="searchicon"
    //       src={window.location.origin + "/images/searchicon.png"}
    //       alt=""
    //     />
    //     <input type="text" placeholder="Search.." />
    //     {/* <button type="submit">search</button> */}
    //     {/* </form> */}
    //   </div>
    // </div>

    <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {/* Navbar */}
          <img className="navbarlogo" src="/images/searchicon.png" alt="" />
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
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Catigories">
                Catigories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about-us">
                About Kutaiib
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
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </ul>
        </div>
      </div>
    </nav>

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
