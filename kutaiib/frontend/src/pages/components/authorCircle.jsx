import GetApiData from "../../API/API";
import "./authorCircle.css";

function AuthorCircle(props) {
  if (props.authorID == undefined) return;
  let Author = GetApiData("Author/" + props.authorID);
  return (
    <a href={"/author/" + props.authorID}>
      <div className="imgframe">
        <center>
          <img
            src={
              process.env.PUBLIC_URL + "/images/a" + props.authorID + ".jpeg"
            }
            alt="ayman"
          />
          <h5 className="authorName">{Author.name}</h5>
        </center>
      </div>
    </a>
  );
}
export default AuthorCircle;
