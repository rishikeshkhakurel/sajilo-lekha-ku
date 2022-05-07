import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

function IncomeStatement() {
  return (
    <>
      <Typography variant="h2">Income Statement</Typography>
      <Grid container mt={4}>
        <Grid item xs={6}>
        <Typography variant="h4">Revenue</Typography>
          <Paper sx={{ marginTop: "20px" }}>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h5">Cash Revenue:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h5">Credit Revenue:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6} >
                <Typography ml={4} variant="h5">Total Revenue:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6} >
                <Typography variant="h5">Cost of Good Sold (COGS):</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6} >
                <Typography variant="h5">Gross Profit (GP):</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6} >
                <Typography variant="h5">General and Administrative Expenses(G&AE):</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6} >
                <Typography variant="h5">Opeating Profit(OP):</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6} >
                <Typography variant="h5">Selling and Distribution(S&D):</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6} >
                <Typography variant="h5">Earning Before Interest and tax(EBI&T):</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6} >
                <Typography variant="h5"> Interest(I):</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6} >
                <Typography variant="h5">Earning Before Tax(EBT):</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6} >
                <Typography variant="h5"> Tax(T):</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6} >
                <Typography variant="h5"> Net Profit(T):</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default IncomeStatement;
