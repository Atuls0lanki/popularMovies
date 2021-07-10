import { IconButton, Typography } from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player";
import CloseIcon from "@material-ui/icons/Close";

function VedioPlayer() {
  return (
    <>
      <Typography align="right">
        <IconButton
          style={{ backgroundColor: "#0000009c", marginBottom: "10px" }}
        >
          <CloseIcon style={{ color: "white" }} />
        </IconButton>
      </Typography>
      <Typography align="center">
        <ReactPlayer url="https://content.jwplatform.com/manifests/yp34SRmf.m3u8"></ReactPlayer>
      </Typography>
    </>
  );
}

export default VedioPlayer;
