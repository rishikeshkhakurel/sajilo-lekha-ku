import React from 'react'
import { useSelector } from 'react-redux';
import MuiTable from "../../../table/view/index";
import Loan from '../hooks/Loan';

export default function LoanDetail() {

  Loan();

  const data = useSelector((state) =>state.loanSlice.data);

const headCells=[
    {
        numeric: false,
        disablePadding: false,
        label: "Transaction Date",
        id: "TransactionDate",
    },
    
    {
      numeric: true,
      disablePadding: false,
      label: "Transaction Detail",
      id: "transactionDetail",
    },

    {
      numeric: true,
      disablePadding: false,
      label: "Credit Amount",
      id: "loanAmount",
  },
    {
        numeric: true,
        disablePadding: false,
        label: "Debit Amount",
        id: "DebitAmount",
      },
     

     
      {
        numeric: true,
        disablePadding: false,
        label: "Transaction Method",
        id: "transactionMethod",
      },
     


    ]

  const  num = [2,3,4,5,];

  return(
 <MuiTable
 headCells={headCells}
 num = {num}
 rows={data}
 
 />   
  );
}