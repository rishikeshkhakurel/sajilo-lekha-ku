import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import ServiceAccount from "../hooks/ServiceSupplierAccount";

export default function ServiceSupplierAccount() {
  const {
    fetchData,
    rowsPerPage,
    page,
    handleChangeRowsPerPage,
    handleChangePage,
  } =  ServiceAccount();

  // transaction detail of staff

  const data = fetchData?.salary;

  console.log(data, "hasldf");

  const staffData = fetchData?.staffDetails;
  console.log(staffData);

  // const arrayData = receipt.map((data)=>{
  //   console.log(data,"arrya");
  // })

  const style = {
    color: "white",
    fontWeight: "600",
  };

  return (
    <React.Fragment>
      <Box sx={{ m: "20px", p: 3 }}>
        <Paper sx={{ display: "flex", width: "100%" }} elevation={0}>
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>
              Name : {staffData?.StaffName}
            </Typography>

            <Typography sx={{ mt: 2, fontWeight: "bold" }}>
              Address : {staffData?.Address}
            </Typography>

            <Typography sx={{ mt: 2, fontWeight: "bold" }}>
              Contact No : {staffData?.Contact_No}
            </Typography>

            <Typography sx={{ mt: 2, fontWeight: "bold" }}>
              Status : {staffData?.Status}
            </Typography>
          </Box>
        </Paper>
      </Box>
      
      <Box>
        <Typography
          variant="h2"
          sx={{
            backgroundColor: "#2196f3",
            height: "60px",
            color: "white",
            display: "flex",
            mb:"0.5px",
            pl:2,
            alignItems: "center",
          }}
        >
        Staff Personal Account
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#2196f3" }}>
              <TableCell sx={style}>SN</TableCell>

              <TableCell sx={style}>Transaction Date</TableCell>
              <TableCell sx={style}>Transaction Detail</TableCell>
              <TableCell sx={style}>Credit</TableCell>
              <TableCell sx={style}>Debit</TableCell>
              <TableCell sx={style}>Status</TableCell>
              <TableCell sx={style}>Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((data) => (
                <TableRow
                 
                  key={data.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    backgroundColor: "#ede7f6",
                  }}
                >
                  <TableCell>{data?.sn}</TableCell>

                  <TableCell>{data?.transactionDate}</TableCell>
                  <TableCell>{data?.transactionDetail}</TableCell>
                  <TableCell>{data?.credit}</TableCell>
                  <TableCell>{data?.debit}</TableCell>
                  <TableCell>{data?.status}</TableCell>

                  <TableCell>{data?.balance}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        count={data?.length}
        component="div"
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </React.Fragment>
  );
}
