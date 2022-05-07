import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import React from "react";

function DialogComp(props) {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>
        {props.title}
        <IconButton aria-label="close" onClick={props.onClose}>
          {/* <AiOutlineClose /> */}*
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{height:"300px"}} >{props.children}</DialogContent>
    </Dialog>
  );
}

export default DialogComp;
