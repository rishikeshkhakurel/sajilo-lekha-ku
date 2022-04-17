import React from 'react'
import { useSelector } from 'react-redux';
import Tax from '../hooks/Tax';
import MuiTable from "../../../table/view/index";

export default function TaxDetail() {

Tax();

const data = useSelector(state=>(state.taxSlice.data))

console.log(data)


const headCells= [

    {
        numeric: false,
        disablePadding: false,
        label: "Transaction Date",
        id: "TransactionDate",
      },
  
      {
        numeric: true,
        disablePadding: false,
        id: "Transaction Detail",
        label: "TransactionDetail",
      },
  
      {
        numeric: true,
        disablePadding: false,
        label: "Credit Amount",
        id: "CreditAmount",
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
        id: "TransactionMethod",
      },

]

const num = [2,3,4,5]

  return (
    <React.Fragment>
        
       <MuiTable
       headCells={headCells}
       num = {num}
       rows={data}
       title="Tax Detail"
       />

    </React.Fragment>
  )
}
