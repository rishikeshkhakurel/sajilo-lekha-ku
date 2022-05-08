import React from "react";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, TablePagination, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { GoodsSupplier, PageSelect } from "../hooks/GoodsSupplierLedger";

export default function GoodsSupplierLedger() {

  GoodsSupplier();



  const { rowsPerPage, page, handleChangeRowsPerPage, handleChangePage } =
  PageSelect();

  const data = useSelector((state) => state.goodsSupplierLedger.data);

  console.log(data, "formvaluem asdfsdf");


  

  

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
          Goods Supplier Ledger
        </Typography>

        </Box>
      

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#2196f3" }}>
              <TableCell sx={style}>SN</TableCell>
              <TableCell sx={style}>Goods Supplier Name</TableCell>

              <TableCell sx={style}> Address</TableCell>

              <TableCell sx={style}>Contact No</TableCell>
              <TableCell sx={style}>Balance</TableCell>

              <TableCell sx={style}>Status</TableCell>

              
             
             
              
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
                <TableCell><Link to ={`/goodsSupplierAccount`} state={data.goodsSuppliersId}>{data.goodsSuppliersName}</Link></TableCell>
                <TableCell>{data.goodsSuppliersAddress}</TableCell>
                  
                <TableCell>{data.goodsSuppliersContact}</TableCell>


                <TableCell>{data.goodsSuppliersBalance}</TableCell>
               
                <TableCell>{data.status}</TableCell>

               
              

               

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
