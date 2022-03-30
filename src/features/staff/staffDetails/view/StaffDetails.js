import React, { useState } from "react";
import Tables from "../../../table/view/index.js";
import axiosInstance from "../../../../common/helper/axiosInterceptor.js";
import http_config from "../../../../common/config/httpconfig/http_config";

export default function StaffDetails() {
  const [data, setdata] = useState([]);

  const stafdetail = axiosInstance
    .get(http_config.BASE_URL + "/api/displayStaff")
    .then((response) => {
      setdata(response.staffs);
      console.log(response.staffs);
    });

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

  const num = [2, 3, 4, 5,];

  return (
    <React.Fragment>
      <Tables headCells={headCells} rows={data ? data : []} num={num} />
    </React.Fragment>
  );
}
