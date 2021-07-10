import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import DataShow from "../components/DataShow";
import { Link } from "react-router-dom";

function Page() {
  return (
    <div>
      <Grid container style={{ padding: "25px" }}>
        <Grid item xs={12}>
          {/* <Typography align="center" variant="h3">
            Welcome to MyMovies
          </Typography> */}
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {/* <Paper elevation={3} style={{ padding: "20px", width: "100%" }}> */}
            <Grid container style={{ paddingTop: "20px" }}>
              <Typography variant="h3" style={{ paddingLeft: "20px" }}>
                Popular Movies
              </Typography>
              <Grid item xs={4}></Grid>
              <Grid item xs></Grid>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  size="small"
                  label="Search Here"
                  color="secondary"
                  fullWidth
                ></TextField>
                <Link to="/vedio">
                  <Button variant="contained">vedio</Button>
                </Link>
              </Grid>
            </Grid>
            {/* </Paper> */}
            <DataShow />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Page;