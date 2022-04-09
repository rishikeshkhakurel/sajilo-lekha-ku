import React from "react";
import { useSelector } from "react-redux";
import Table from "../../table/view";
import Product from "../hooks/Product";

export default function ProductDetail() {
 
  Product();

  const data = useSelector((state) =>state.productSlice.data);

  console.log(data);

  const headCells = [
    {
      numeric: false,
      disablePadding: false,
      label: "Product Name",
      id: "productName",
    },
    {
      numeric: true,
      disablePadding: false,
      label: "Company Name",
      id: "companyName",
    },
    {
      numeric: true,
      disablePadding: false,
      label: "Size",
      id: "size",
    },
    {
      numeric: true,
      disablePadding: false,
      label: "Colour",
      id: "colour",
    },
    {
      numeric: true,
      disablePadding: false,
      label: "Expiry Date",
      id: "expireyDate",
    },
    {
      numeric: true,
      disablePadding: false,
      label: "Unit",
      id: "unit",
    },
    {
      numeric: true,
      disablePadding: false,
      label: "Equivalent SI Value",
      id: "equivalent_SI_Value",
    },
    {
      numeric: true,
      disablePadding: false,
      label: "Cost Price",
      id: "costPrice",
    },
    {
      numeric: true,
      disablePadding: false,
      label: "Selling Price",
      id: "sellingPrice",
    },
    {
      numeric: true,
      disablePadding: true,
      label: "Mimimum_Stock_Quantity",
      id: "minimum_Stock_Quantity",
    },
    {
      numeric: true,
      disablePadding: false,
      label: "Stock Quantity In SI Value",
      id: "stock_Quality_In_SI_Value",
    },
  ];

  const num = [2, 3, 4, 5, 6, 7, 8, 9,10,11];

  return (
    <React.Fragment>
      <Table headCells={headCells} num={num} rows={data }  />
    </React.Fragment>
  );
}
