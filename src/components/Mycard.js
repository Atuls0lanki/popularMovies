import { makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { detailedRequest } from "../redux/movies/action";

const useStyles = makeStyles({
  link: {
    color: "blue",
    // transform: "scale(0.9)",
    "&:hover": {
      transform: "scale(1.07)",
    },
  },
});

function Mycard(props) {
  const classes = useStyles();
  const { data } = props;

  const dispatch = useDispatch();

  const picLink = `https://image.tmdb.org/t/p/original${data.poster_path}`;
  return (
    <div>
      <Link
        to="/detailpage"
        onClick={() => {
          dispatch(detailedRequest(data));
        }}
      >
        <Paper
          elevation={9}
          style={{ padding: "10px" }}
          onClick={() => {
            console.log(data);
          }}
          className={classes.link}
        >
          <img src={picLink} style={{ width: "100%" }}></img>
          {data.title}
        </Paper>
      </Link>
    </div>
  );
}

export default Mycard;
