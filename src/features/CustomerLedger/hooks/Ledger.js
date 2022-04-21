import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import http_config from "../../../common/config/httpconfig/http_config";
import axiosInstance from "../../../common/helper/axiosInterceptor";
import customerLedgerSlice from "../../../redux/slice/CustomerLedgerSlice";

const Ledger = () => {
  


    const [rowsPerPage, setRowsPerPage] = useState(5);
   const [page, setPage] = useState(0)


    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };


    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const dispatch = useDispatch();
    useEffect(() => {
      axiosInstance
        .get(http_config.BASE_URL + "/api/customerLedger")
        .then((response) => {
          dispatch(customerLedgerSlice.actions.setData(response.Ledger));
        });
      }, [] );


      

    return {
rowsPerPage,
page,
handleChangeRowsPerPage,
handleChangePage,
    }



  };




export default Ledger;
