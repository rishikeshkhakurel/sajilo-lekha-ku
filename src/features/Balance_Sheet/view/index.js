import { Divider, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const BalanceSheet = () => {
  return (
    <div>
      <Typography variant="h2">Balance Sheet</Typography>

      <Grid container spacing={2} mt={2}>
        <Grid item xs={6}>
          <Paper>
            <Typography variant="h4">ASSETS</Typography>
            <Typography variant="h4">Current Assets</Typography>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h6">Cash:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h6">Account Receivable:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h6">Inventory:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h6">Prepaid expenses:</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>

            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h4" ml={2}>
                  Total Current Assets:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
          </Paper>
          {/* Fixed assets */}

          <Paper sx={{ marginTop: "20px" }}>
            <Typography variant="h4">Fixed Assets</Typography>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h6">Land:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h6">Building:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h6">Vechicles:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h4" ml={2}>
                  Total Net Fixed Assets:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
          </Paper>
          <Paper sx={{ display: "flex", marginTop: "10px" }}>
            <Grid item xs={6}>
              <Typography variant="h4">Total Assets:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" ml={2}>
                Rs 1000
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        {/* right side of balancesheet  */}
        <Grid item xs={6}>
          <Paper>
            <Typography variant="h4">LIABILITIES</Typography>
            <Typography variant="h4">Current Liabilities</Typography>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h6">Account Payable:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h6">Interest Payable:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h6">Taxes Payable:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h6">Accured payroll:</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>

            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h4" ml={2}>
                  Total Current Liabilities:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
          </Paper>
          {/* Long term Liabilities */}

          <Paper sx={{ marginTop: "20px" }}>
            <Typography variant="h4">Long Term Liabillities</Typography>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h6">Mortage:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h6">
                  Other Long term loabilities:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h4" ml={2}>
                  Total Long term Liabilities:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
          </Paper>
            {/* shareholders equity */}

            <Paper sx={{ marginTop: "20px" }}>
            <Typography variant="h4">Share Holders Equity</Typography>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h6">Capital stock:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h6">
                  Retained earnings:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h4" ml={2}>
                  Total Share Holders Equity:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h3">
                  Total Liabilities & Equity:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default BalanceSheet;
