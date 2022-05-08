import { Divider, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import http_config from "../../../common/config/httpconfig/http_config";
import axiosInstance from "../../../common/helper/axiosInterceptor";

const BalanceSheet = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axiosInstance
      .get(http_config.BASE_URL + "/api/balanceSheet")
      .then((res) => {
        setData(res);
      });
  }, []);
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
                  Rs {data?.cash}
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h6">Account Receivable:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs {data?.accountReceivebale}
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h6">Inventory:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs {data?.inventory}
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h6">Prepaid expenses:</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs {data?.prepaidExpenses}
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
                  Rs{" "}
                  {data?.cash +
                    data?.accountReceivebale +
                    data?.inventory +
                    data?.prepaidExpenses}
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
                  Rs {data?.landValue}
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h6">Building:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs {data?.buildingValue}
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h6">Vechicles:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs {data?.vehicleValue}
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
                  Rs{" "}
                  {data?.buildingValue + data?.landValue + data?.vehicleValue}
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
                Rs{" "}
                {data?.cash +
                  data?.accountReceivebale +
                  data?.buildingValue +
                  data?.landValue +
                  data?.vehicleValue +
                  data?.inventory +
                  data?.prepaidExpenses}
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
                  Rs {data?.accountPayable}
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h6">Interest Payable:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs {data?.interestPayable}
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h6">Taxes Payable:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs {data?.taxPayable}
                </Typography>
              </Grid>
            </Paper>
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h6">Accured payroll:</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs {data?.accuiredPayroll}
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
                  Rs{" "}
                  {(
                    data?.interestPayable +
                    data?.accuiredPayroll +
                    data?.taxPayable +
                    data?.accountPayable
                  ).toFixed(2)}
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
                  Rs {data?.loanBalance}
                </Typography>
              </Grid>
            </Paper>
            {/* <Paper sx={{ display: "flex", marginTop: "10px" }}>
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
            </Paper> */}
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h4" ml={2}>
                  Total Long term Liabilities:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs {data?.loanBalance}
                </Typography>
              </Grid>
            </Paper>
          </Paper>
          {/* shareholders equity */}

          <Paper sx={{ marginTop: "20px" }}>
            {/* <Typography variant="h4">Share Holders Equity</Typography>
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
                <Typography variant="h6">Retained earnings:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs 1000
                </Typography>
              </Grid>
            </Paper> */}
            <Paper sx={{ display: "flex", marginTop: "10px" }}>
              <Grid item xs={6}>
                <Typography variant="h4" ml={2}>
                  Total Share Holders Equity:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" ml={2}>
                  Rs{" "}
                  {data?.cash +
                    data?.accountReceivebale +
                    data?.buildingValue +
                    data?.landValue +
                    data?.vehicleValue +
                    data?.inventory +
                    data?.prepaidExpenses -
                    (data?.interestPayable +
                      data?.accuiredPayroll +
                      data?.taxPayable +
                      data?.accountPayable)}
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
                  Rs{" "}
                  {(data?.cash +
                    data?.accountReceivebale +
                    data?.buildingValue +
                    data?.landValue +
                    data?.vehicleValue +
                    data?.inventory +
                    data?.prepaidExpenses -
                    (data?.interestPayable +
                      data?.accuiredPayroll +
                      data?.taxPayable +
                      data?.accountPayable)) +
                    (data?.interestPayable +
                      data?.accuiredPayroll +
                      data?.taxPayable +
                      data?.accountPayable)}
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
