import React from 'react'
import { useSelector } from 'react-redux';
import{ Tax, PageSelect} from '../hooks/Tax';
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


export default function TaxDetail() {

const{deleteHandler}=Tax();

const data = useSelector(state=>(state.taxSlice.data))

console.log(data);

const { rowsPerPage, page, handleChangeRowsPerPage, handleChangePage } =
PageSelect();


// const headCells= [

//     {
//         numeric: false,
//         disablePadding: false,
//         label: "Transaction Date",
//         id: "TransactionDate",
//       },
  
//       {
//         numeric: true,
//         disablePadding: false,
//         id: "Transaction Detail",
//         label: "TransactionDetail",
//       },
  
//       {
//         numeric: true,
//         disablePadding: false,
//         label: "Credit Amount",
//         id: "CreditAmount",
//       },
//       {
//         numeric: true,
//         disablePadding: false,
//         label: "Debit Amount",
//         id: "DebitAmount",
//       },
  
//       {
//         numeric: true,
//         disablePadding: false,
//         label: "Transaction Method",
//         id: "TransactionMethod",
//       },

// ]

// const num = [2,3,4,5]


const style = {
  color: "white",
  fontWeight: "600",
};

  return (
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
          Tax Detail
        </Typography>
      </Box>  

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#2196f3" }}>
              <TableCell sx={style}>Transaction Date</TableCell>
              <TableCell sx={style}>Transaction Detail</TableCell>
              <TableCell sx={style}>Credit Amount</TableCell>
              <TableCell sx={style}>Debit Amount</TableCell>
              <TableCell sx={style}>Transaction Method</TableCell>
              
              <TableCell sx={style}>Edit</TableCell>
              <TableCell sx={style}>Delete</TableCell>


              
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((data) => (
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  backgroundColor: "#ede7f6",
                }}
              >
                <TableCell>{data.TransactionDate}</TableCell>
                <TableCell>{data.TransactionDetail}</TableCell>
                <TableCell>{data.CreditAmount}</TableCell>
                
                <TableCell>{data.DebitAmount}</TableCell>
                <TableCell>
                  {data.TransactionMethod}
                </TableCell>
                
              

                <TableCell>
                  
                  <Link to="/updateTax" state={data._id}>
                    
                    <EditIcon sx={{ cursor: "pointer" }} />
                  </Link>
                </TableCell>
             <TableCell> 
               <DeleteIcon
               onClick={()=>{deleteHandler(data._id)}}
               sx={{cursor:"pointer"}} />
               
                </TableCell>

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
  )
}
