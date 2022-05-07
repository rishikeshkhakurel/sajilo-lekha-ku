import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePaginations from "./hooks/TablePagination";
import {  TablePagination } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";



export default function PersonalTable(props) {
  const [status, setStatus] = useState("");

  const {rowsPerPage,
    page,
    handleChangeRowsPerPage,
    handleChangePage} = TablePaginations();


    const datas = props.receipt;

    const style = {
      color:"white",
      fontWeight:"600"
    }

    const navigate = useNavigate();

    const {id} = useParams();

    
  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} >
          <TableHead>
            <TableRow sx={{ backgroundColor: "#2196f3" }}  >
              <TableCell  sx={style}>SN</TableCell>

              <TableCell  sx={style}>Transaction Date</TableCell>
              <TableCell  sx={style}>Transaction Detail</TableCell>
              <TableCell  sx={style}>Credit</TableCell>
              <TableCell  sx={style}>Debit</TableCell>
              <TableCell  sx={style}>Status</TableCell>
              <TableCell  sx={style}>Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((data) => (
              <TableRow
              onClick={() =>{

                navigate('/bill/${data.id}')
               }}
                key={data.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 }, backgroundColor:"#ede7f6" }}
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
        count={datas?.length}
        component="div"
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </React.Fragment>
  );
}
