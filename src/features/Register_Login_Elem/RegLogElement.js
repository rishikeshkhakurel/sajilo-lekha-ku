import React from "react";
import { Grid, Paper, Avatar, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
export default function RegLogElement(props) {
  

  return (
    <>
      <Grid align="center">
        <Paper
          elevation={10}
          sx={{
            padding: 3,
            paddingBottom: 6,
            width: 400,
            marginTop: 7,
          }}
        >
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h2"> {props.title} </Typography> 

         

          {props.children}
        </Paper>
      </Grid>
    </>
  );
}
