import { CssBaseline, LinearProgress, makeStyles } from "@material-ui/core";
import "./App.css";
import NavBar from "../components/NavBar";
import { HashRouter, Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";

const Page0 = lazy(() => import("../page/Page"));
const Page1 = lazy(() => import("../page/Details"));
const Page2 = lazy(() => import("../page/VedioPlayer"));

const usestyles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
    padding: "0px",
    margin: "0px",
    backgroundColor: "#eaeef3",
    overflow: "hidden",
  },
  rightpage: {
    width: "100%",
    height: "100%",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#eaeef3",
      margin: "8px 0px",
    },
    "&::-webkit-scrollbar-thumb": {
      border: "4px solid grey",
      borderRadius: "10px",
    },
  },
});

function App() {
  const classes = usestyles();
  return (
    <HashRouter basename="/">
      <Suspense
        fallback={
          <div style={{ width: "100%", position: "fixed" }}>
            <LinearProgress variant="determinate" color="secondary" />
          </div>
        }
      >
        <div className={classes.root}>
          <NavBar />
          <Switch>
            <div className={classes.rightpage}>
              <Route exact path="/vedio" component={Page2} />
              <Route exact path="/detailpage" component={Page1} />
              <Route exact path="/" component={Page0} />
            </div>
          </Switch>
        </div>
        <CssBaseline />
      </Suspense>
    </HashRouter>
  );
}

export default App;
