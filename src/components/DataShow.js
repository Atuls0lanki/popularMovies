import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieRequest } from "../redux/movies/action";
import { allMovies } from "../redux/sagas/saga";
import Mycard from "./Mycard";

function DataShow() {
  const dispatch = useDispatch();
  const [show, setshow] = useState(0);
  useEffect(() => {
    dispatch(movieRequest());
    setshow(1);
  }, []);

  const state = useSelector((state) => state.Movies);
  console.log(state);

  const showdata = () => {
    var alldata = "";
    if (show > 0 && state.loading === false) {
      alldata = state.data.results.map((data, index) => {
        return (
          <>
            <Grid item xs={3}>
              <Mycard data={data} key={index} />
            </Grid>
          </>
        );
      });
    }
    console.log(alldata);
    return alldata;
  };

  return (
    <>
      <Grid container spacing={3} style={{ paddingTop: "25px" }}>
        {showdata()}
      </Grid>
    </>
  );
}

export default DataShow;
