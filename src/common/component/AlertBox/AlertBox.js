import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
export default function AlertBox(props) {
  const audio = new Audio("/assets/ringtone.mp3");
  const [hidealertbox, sethidealertbox] = useState(false);
  // useEffect(() => {
  //   audio.play();
  // }, []);
  setTimeout(() => {
    sethidealertbox(true);
  }, 5000);
  return (
    <Alert sx={hidealertbox && { display:"none"}} variant="filled" severity={props.error ? "error":"success"}>
      {props?.message}
    </Alert>
  );
}
