import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieRequest } from "../redux/movies/action";
import { allMovies } from "../redux/sagas/saga";
import Mycard from "./Mycard";

function DataShow(props) {
  const { sdata } = props;
  const dispatch = useDispatch();
  const [show, setshow] = useState(0);
  useEffect(() => {
    dispatch(movieRequest());
    setshow(1);
  }, []);

  const state = useSelector((state) => state.Movies);

  const showdata = () => {
    var alldata = "";
    if (show > 0 && state.loading === false) {
      var Fdata = state.data.results;
      if (sdata.search !== "" || sdata.search !== " ") {
        let val = sdata.search.toLowerCase();
        let matches = [];
        matches = Fdata.filter((v) => v.title.toLowerCase().includes(val));
        Fdata = matches;
      }

      alldata = Fdata.map((data, index) => {
        return (
          <>
            <Grid item xs={6}>
              <Mycard data={data} key={index} />
            </Grid>
          </>
        );
      });
    }
    return alldata;
  };

  return (
    <>
      <Grid container spacing={5} style={{ paddingTop: "25px" }}>
        {showdata()}
      </Grid>
    </>
  );
}

export default DataShow;
