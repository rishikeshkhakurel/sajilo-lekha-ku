import React from "react";
import { useSelector } from "react-redux";
import MuiTable from "../../../table/view/index";
import ServiceSupplierDet from "../hooks/ServiceSupplier";

export default function ServiceSupplierDetail() {
  ServiceSupplierDet();

  const data = useSelector((state) => state.serviceSupplierSlice.data);

  console.log(data, "formvalue");

  const headCells = [
    {
      numeric: false,
      disablePadding: false,
      label: "Service Supplier Name",
      id: "ServiceSupplierName",
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
      label: "Contact No",
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
        label: "Status",
        id: "Status",
      },
  

    {
      numeric: true,
      disablePadding: false,
      label: "Category",
      id: "Category",
    },

    {
      numeric: true,
      disablePadding: false,
      label: "Sub Category",
      id: "Sub_Category",
    },

   
    {
      numeric: true,
      disablePadding: false,
      label: "Remarks",
      id: "Remarks",
    },
  ];

  const num = [2, 3, 4, 5, 6, 7, 8];

  return (
    <React.Fragment>
      <MuiTable
        title="Service Supplier Details"
        headCells={headCells}
        num={num}
        rows={data}
      />
    </React.Fragment>
  );
}
