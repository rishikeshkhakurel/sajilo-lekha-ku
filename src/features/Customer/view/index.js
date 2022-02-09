import React from "react";
import Table from "../../table/view/index";

function createData(name, phone_number, address) {
  return {
    name,
    phone_number,
    address,
  };
}

const rows = [
  createData("Ram", 9843123456, "kathmandu"),
  createData("Sham", 9843123456, "kathmandu"),
  createData("Sita", 9843123456, "kathmandu"),
  createData("Hari", 9843123456, "kathmandu"),
  createData("Gita", 9843123456, "kathmandu"),
];

const headCells = [
  {
    numeric: false,
    disablePadding: true,
    label: "Customer Name",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "Contact Number",
  },
  {
    numeric: true,
    disablePadding: false,
    label: "Address",
  },
];

const num = [1, 2]; // to identify number of object in rows .... if there is 3 object pass [1,2] if there is 5 object then pass [1,2,3,4] since a object must have padding none and fixed object

function Customer() {
  return (
    <React.Fragment>
      <Table
        title="Customer Details"
        rows={rows}
        headCells={headCells}
        num={num}
      />
    </React.Fragment>
  );
}

export default Customer;
