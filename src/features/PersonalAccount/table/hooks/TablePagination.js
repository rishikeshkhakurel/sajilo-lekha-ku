import React, { useState } from 'react'

const TablePaginations = () => {

    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0)
 
 
     const handleChangeRowsPerPage = (event) => {
       setRowsPerPage(parseInt(event.target.value, 10));
       setPage(0);
     };
 
 
     const handleChangePage = (event, newPage) => {
       setPage(newPage);
     };


     return {

rowsPerPage,
page,
handleChangeRowsPerPage,
handleChangePage

     }

}

export default TablePaginations;
