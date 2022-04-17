import React from 'react'
import { useSelector } from 'react-redux';
import MuiTable from "../../../table/view/index";
import Interest from "../hooks/Interest"

export default function InterestDetail() {

    Interest()

const data = useSelector((state)=>state.interestDetailSlice.data);
   

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
          label: "Interest Amount",
          id: "interestAmount",
      },
       
          {
            numeric: true,
            disablePadding: false,
            label: "Transaction Method",
            id: "transactionMethod",
          },
    ]
const num = [2,3,4,]

  return (
    <React.Fragment>
  
<MuiTable
headCells={headCells}
num={num}
rows={data}
/>

    </React.Fragment>
  )
}
