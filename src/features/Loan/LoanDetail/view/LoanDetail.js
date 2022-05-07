import React from 'react'
import { useSelector } from 'react-redux';
import MuiTable from "../../../table/view/index";
import {Loan, PageSelect} from '../hooks/Loan';

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, TablePagination, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';



export default function LoanDetail() {

  Loan();

  const data = useSelector((state) =>state.loanSlice.data);

  const { rowsPerPage, page, handleChangeRowsPerPage, handleChangePage } =
  PageSelect();

// const headCells=[
//     {
//         numeric: false,
//         disablePadding: false,
//         label: "Transaction Date",
//         id: "TransactionDate",
//     },
    
//     {
//       numeric: true,
//       disablePadding: false,
//       label: "Transaction Detail",
//       id: "transactionDetail",
//     },

//     {
//       numeric: true,
//       disablePadding: false,
//       label: "Credit Amount",
//       id: "loanAmount",
//   },
//     {
//         numeric: true,
//         disablePadding: false,
//         label: "Debit Amount",
//         id: "DebitAmount",
//       },
     

     
//       {
//         numeric: true,
//         disablePadding: false,
//         label: "Transaction Method",
//         id: "transactionMethod",
//       },
     


//     ]

//   const  num = [2,3,4,5,];

const style = {
  color: "white",
  fontWeight: "600",
};


  return(
// 

      
      <React.Fragment>
        <Box sx={{ m: 3, mt: 4 }}>
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
          Loan Detail
        </Typography>
      </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#2196f3" }}>
                <TableCell sx={style}>SN</TableCell>
                  <TableCell sx={style}>Transaction Date</TableCell>
                  <TableCell sx={style}>Transaction Detail</TableCell>
                  <TableCell sx={style}>Credit Amount</TableCell>
                  <TableCell sx={style}>Debit Amount</TableCell>
                  <TableCell sx={style}>Balance</TableCell>

                  <TableCell sx={style}>Status</TableCell>
                  <TableCell sx={style}>Edit</TableCell>
                  <TableCell sx={style}>Delete</TableCell>


                  
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((data) => (
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      backgroundColor: "#ede7f6",
                    }}
                  >
                    <TableCell>{data.sn}</TableCell>
                    <TableCell>{data.transactionDate}</TableCell>
                    <TableCell>{data.transactionDetail}</TableCell>
                    <TableCell>{data.credit}</TableCell>

                    <TableCell>{data.debit}</TableCell>

                    <TableCell>{data.balance}</TableCell>
                    <TableCell>{data.status}</TableCell>

                    <TableCell>
                      <Link to="/updateLoan" state={data.id}>
                        <EditIcon sx={{ cursor: "pointer" }} />
                      </Link>
                    </TableCell>
                    <TableCell>
                <DeleteIcon 
                    sx={{cursor:"pointer"}}
                    /></TableCell>

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
        </Box>
      </React.Fragment>
    
  );
}