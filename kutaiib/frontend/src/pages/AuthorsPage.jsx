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
          <AuthorCircle authorID={id} />
          <h1></h1>
        </>
      ))}
      {console.log(Data)}
    </>
  );
}

export default AuthorsPage;
