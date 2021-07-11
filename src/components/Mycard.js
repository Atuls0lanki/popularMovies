import {
  Button,
  Checkbox,
  Fade,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { detailedRequest } from "../redux/movies/action";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Modal from "@material-ui/core/Modal";
import VedioPlayer from "../page/VedioPlayer";
import ReactPlayer from "react-player";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "blue",
    // transform: "scale(0.9)",
    "&:hover": {
      // transform: "scale(1.03)",
      "& $overlay": {
        width: "100%",
      },
    },
  },
  container: {
    position: "relative",
  },

  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#0000005c",
    overflow: "hidden",
    width: "0",
    height: "100%",
    transition: ".5s ease",
  },

  text: {
    color: "white",
    fontSize: "20px",
    position: "absolute",
    top: "50%",
    left: "50%",
    webkitTransform: "translate(-50%, -50%)",
    msTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
    whiteSpace: "nowrap",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    zIndex: "10",
  },
};

function Mycard(props) {
  const classes = useStyles();
  const { data } = props;

  const dispatch = useDispatch();

  const picLink = `https://image.tmdb.org/t/p/original${data.poster_path}`;

  const lang = () => {
    if (data.original_language === "en") {
      return "English";
    } else {
      return data.original_language;
    }
  };

  function trimlength(e) {
    let length = e.length;
    if (length < 250) {
      return e;
    } else {
      return (e = e.substr(0, 250) + "...");
    }
  }

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Grid style={{ height: "350px" }}>
        <Paper
          elevation={9}
          style={{
            Height: "300px",
            minHeight: "300px",
            borderRadius: "25px",
          }}
          className={classes.link}
        >
          <Grid container>
            <Grid item xs={5}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                }}
              >
                <Paper
                  elevation={9}
                  style={{
                    width: "210px",
                    height: "320px",
                    borderRadius: "25px",
                    left: "30px",
                    top: "30px",
                    position: "absolute",
                    overflow: "hidden",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  <div className={classes.container}>
                    <img
                      src={picLink}
                      style={{ width: "100%", height: "320px" }}
                    ></img>
                    <div className={classes.overlay}>
                      <div className={classes.text}>
                        <Typography align="center">
                          <Link
                            to="/detailpage"
                            style={{ textDecoration: "none" }}
                            onClick={() => {
                              dispatch(detailedRequest(data));
                            }}
                          >
                            <Button
                              variant="contained"
                              color="secondary"
                              style={{ display: "block", marginBottom: "50px" }}
                            >
                              All details
                            </Button>
                          </Link>
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleOpen}
                          >
                            Preview
                          </Button>
                          <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                              timeout: 500,
                            }}
                          >
                            <Fade in={open}>
                              <div>
                                <Grid container>
                                  {/* <Grid item xs>
                                    <Typography
                                      align="center"
                                      variant="h3"
                                      color="textsecondary"
                                    >
                                      Preview Movie
                                    </Typography>
                                  </Grid> */}
                                  <Grid item xs>
                                    <Typography align="right">
                                      <IconButton
                                        style={{
                                          backgroundColor: "#0000009c",
                                          marginBottom: "10px",
                                        }}
                                        onClick={handleClose}
                                      >
                                        <CloseIcon style={{ color: "white" }} />
                                      </IconButton>
                                    </Typography>
                                  </Grid>
                                </Grid>

                                <Typography align="center">
                                  <ReactPlayer
                                    playing={true}
                                    controls={true}
                                    loop={true}
                                    playIcon
                                    url="https://content.jwplatform.com/manifests/yp34SRmf.m3u8"
                                  ></ReactPlayer>
                                </Typography>
                              </div>
                            </Fade>
                          </Modal>
                        </Typography>
                      </div>
                    </div>
                  </div>
                </Paper>
              </div>
              {/* <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: "yellow",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                4
              </div> */}
            </Grid>
            <Grid item xs={7} style={{ height: "300px", position: "relative" }}>
              <Typography
                align="left"
                variant="h5"
                color="textPrimary"
                style={{ paddingTop: "20px" }}
              >
                {data.title}
              </Typography>
              <Typography varient="body1" color="textSecondary">
                <b>{lang()}</b>
              </Typography>
              <Typography varient="body1" color="textSecondary">
                {data.release_date}
              </Typography>
              <Typography
                style={{ padding: "20px", paddingLeft: "0px" }}
                color="textPrimary"
                variant="body2"
                align="justify"
              >
                {trimlength(data.overview)}
              </Typography>
              <Grid
                container
                style={{ position: "absolute", left: "0px", bottom: "0px" }}
              >
                <Grid item xs>
                  <Grid container>
                    <div
                      style={{
                        width: "min-content",
                        backgroundColor: "yellow",
                        padding: "8px",
                        borderRadius: "10px",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      {data.vote_average}
                    </div>
                    <div
                      style={{
                        width: "min-content",
                        padding: "8px",
                        color: "black",
                        // fontWeight: "bold",
                      }}
                    >
                      {`(${data.vote_count})`}
                    </div>
                  </Grid>
                </Grid>
                <Grid item xs></Grid>
                <Grid item xs>
                  <Typography align="right" style={{ paddingRight: "15px" }}>
                    <Checkbox
                      value="checkedA"
                      inputProps={{ "aria-label": "Checkbox A" }}
                      icon={<FavoriteBorderIcon fontSize="large" />}
                      checkedIcon={
                        <FavoriteIcon color="secondary" fontSize="large" />
                      }
                    />
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default Mycard;
