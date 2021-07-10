import React from "react";
import { useSelector } from "react-redux";
import Mycard from "../components/Mycard";

function Details() {
  const state = useSelector((state) => state.Movies);

  const data = state.datail;
  return <Mycard data={data}></Mycard>;
}

export default Details;
