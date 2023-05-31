import { useEffect, useState } from "react";
import GetApiData from "../API/API";
import { useParams } from "react-router-dom";
function ItemPage({ match, history }) {
  let { id } = useParams("id");

  let data = GetApiData("Item/" + id);
  return (
    <>
      {/* {console.log(data)} */}
      yes
    </>
  );
}
export default ItemPage;
