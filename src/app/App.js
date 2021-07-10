import { CssBaseline, LinearProgress, makeStyles } from "@material-ui/core";
import "./App.css";
import NavBar from "../components/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { lazy, Suspense } from "react";

const Page0 = lazy(() => import("../page/Page"));
const Page1 = lazy(() => import("../page/Details"));
const Page2 = lazy(() => import("../page/VedioPlayer"));

const usestyles = makeStyles({
  root: {
    width: "100%",
    minHeight: "100vh",
    padding: "0px",
    margin: "0px",
    backgroundColor: "#eaeef3",
  },
});

function App() {
  const classes = usestyles();
  return (
    <Router>
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
            <Route exact path="/vedio" component={Page2} />
            <Route exact path="/detailpage" component={Page1} />
            <Route exact path="/" component={Page0} />
          </Switch>
        </div>
        <CssBaseline />
      </Suspense>
    </Router>
  );
}

export default App;
