import React from 'react'
import GoodsSupplierDet from '../hooks/GoodsSupplier';
import MuiTable from "../../../table/view/index";
import { useSelector } from 'react-redux';
export default function GoodsSupplierDetail() {

    GoodsSupplierDet();

    
  const data = useSelector((state) =>state.goodsSupplierDetail.data);
    

    const headCells=[
        {
            numeric: false,
            disablePadding: false,
            label: "Goods Supplier Name",
            id: "GoodsSupplierName",
        },
        
        {
          numeric: true,
          disablePadding: false,
          label: "Contact",
          id: "Contact_No",
        },
    
        {
          numeric: true,
          disablePadding: false,
          label: "Credit Limit",
          id: "Credit_Limit",
      },
        {
            numeric: true,
            disablePadding: false,
            label: "Address",
            id: "Address",
          },
         
    
         
          {
            numeric: true,
            disablePadding: false,
            label: "Status",
            id: "Status",
          },
          {
            numeric: true,
            disablePadding: false,
            label: "Remarks",
            id: "Remarks",
          },
        ]
    
      const  num = [2,3,4,5,6];


  return (


    <React.Fragment>
    
    <MuiTable
    title="Goods Supplier Detail"
    headCells = {headCells}
    rows = {data ? data : ""}

    num = {num}
    />

    </React.Fragment>
  )
}
