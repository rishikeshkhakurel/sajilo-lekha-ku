import React from "react";
import GoodsSupplierDet from "../hooks/GoodsSupplier";
import { useSelector } from "react-redux";
import { PageSelect } from "../hooks/GoodsSupplier";
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
import DeleteIcon from "@mui/icons-material/Delete";

export default function GoodsSupplierDetail() {
  GoodsSupplierDet();

  const data = useSelector((state) => state.goodsSupplierDetail.data);

  const { rowsPerPage, page, handleChangeRowsPerPage, handleChangePage } =
    PageSelect();

  const style = {
    color: "white",
    fontWeight: "600",
  };

  return (
    <React.Fragment>
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
                mb: "0.5px",
                pl: 2,
                alignItems: "center",
              }}
            >
              Good Supplier Detail
            </Typography>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#2196f3" }}>
                  <TableCell sx={style}>Good Supplier Name</TableCell>
                  <TableCell sx={style}>Contact</TableCell>
                  <TableCell sx={style}>Credit Limit</TableCell>
                  <TableCell sx={style}>Address</TableCell>
                  <TableCell sx={style}>Status</TableCell>
                  <TableCell sx={style}>Remarks</TableCell>
                  <TableCell sx={style}>Edit</TableCell>
                  <TableCell sx={style}>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((data) => (
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      backgroundColor: "#ede7f6",
                    }}
                  >
                    <TableCell>{data.GoodsSupplierName}</TableCell>
                    <TableCell>{data.Contact_No}</TableCell>
                    <TableCell>{data.Credit_Limit}</TableCell>

                    <TableCell>{data.Address}</TableCell>

                    <TableCell>{data.Status}</TableCell>
                    <TableCell>{data.Remarks}</TableCell>

                    <TableCell>
                      <Link to="/updateGoodsSupplier" state={data._id}>
                        <EditIcon sx={{ cursor: "pointer" }} />
                      </Link>
                    </TableCell>

                    <TableCell>
                      <DeleteIcon sx={{ cursor: "pointer" }} />
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
    </React.Fragment>
  );
}
