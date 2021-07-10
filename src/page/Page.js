import { Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import DataShow from "../components/DataShow";

const initialSValues = {
  search: "",
};

function Page() {
  const [sval, setsval] = useState(initialSValues);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setsval({
      ...sval,
      [name]: value,
    });
  };

  return (
    <div>
      <Grid container style={{ padding: "25px", marginBottom: "50px" }}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid container style={{ paddingTop: "20px" }}>
              <Typography variant="h3" style={{ paddingLeft: "20px" }}>
                Popular Movies
              </Typography>
              <Grid item xs={4}></Grid>
              <Grid item xs></Grid>
              <Grid item xs={4}>
                <TextField
                  value={sval.search}
                  name="search"
                  onChange={inputChange}
                  variant="outlined"
                  size="small"
                  label="Search Here"
                  color="secondary"
                  fullWidth
                ></TextField>
              </Grid>
            </Grid>
            <DataShow sdata={sval} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Page;
