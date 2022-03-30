import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import staffSlice from "../../../../redux/slice/staffSlice.js";
import Tables from "../../../table/view/index.js";


export default function StaffDetails() {  
  const data=useSelector((state)=>state.staffSlice.data)
  console.log(data)

  const headCells = [
    {
      numeric: false,
      disablePadding: false,
      label: "Staff Name",
      id: "StaffName",
    },

    {
      numeric: true,
      disablePadding: false,
      id: "Address",
      label: "Address",
    },

    {
      numeric: true,
      disablePadding: false,
      label: "Contact Number",
      id: "Contact_No",
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
      label: "Edit",
      id: "Edit",
    },
  ];

  const num = [2, 3, 4, 5];

  return (
    <React.Fragment>
      <Tables headCells={headCells} rows={data} num={num} />
    </React.Fragment>
  );
}
