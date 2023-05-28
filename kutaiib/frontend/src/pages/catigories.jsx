import Navbar from "./components/Navbar";

function CatigoriesPage(props) {
  return (
    <>
      <Navbar />
      <h1>Catigories:</h1>
      <a href="/home">Home</a>
      <br />
      <a href="/library">Books</a>
      <br />
      <a href="/bookmarks">Bookmarks</a>
      <br />
      <a href="/about-us">About Kutaiib</a>
      <br />
    </>
  );
}

export default CatigoriesPage;
