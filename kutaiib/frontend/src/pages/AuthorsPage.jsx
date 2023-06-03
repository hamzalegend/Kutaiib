import GetApiData from "../API/API";
import ItemListing from "./components/ItemListing";
import Navbar from "./components/Navbar";
import AuthorCircle from "./components/authorCircle";

function AuthorsPage(props) {
  let Data = GetApiData("Authors/");
  return (
    <>
      <Navbar />
      <h1>Authors:yes</h1>

      {Data.map((author, id) => (
        <>
          <AuthorCircle key={id} authorID={id + 1} />
          <h1></h1>
        </>
      ))}
    </>
  );
}

export default AuthorsPage;
