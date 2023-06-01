import GetApiData from "../API/API";

import Navbar from "./components/Navbar";
import { useParams } from "react-router-dom";

import AuthorCircle from "./components/authorCircle";

function AuthorPage(props) {
  var { id } = useParams("id");
  return (
    <>
      <Navbar />
      <h1>Author:</h1>
      <AuthorCircle authorID={id} />
    </>
  );
}

export default AuthorPage;
