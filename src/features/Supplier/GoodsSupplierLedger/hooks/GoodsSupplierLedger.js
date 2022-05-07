import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import http_config from "../../../../common/config/httpconfig/http_config";
import axiosInstance from "../../../../common/helper/axiosInterceptor";
import goodsSupplierLedger from "../../../../redux/slice/goodsSupplierLedgerSlice";

const GoodsSupplier = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axiosInstance
      .get(http_config.BASE_URL + "/api/goodsSuppliersLedger")
      .then((response) => {
        dispatch(
          goodsSupplierLedger.actions.setData(response.Ledger)
        );
        console.log(response);
      });
  }, [dispatch]);
};

const PageSelect = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return {
    rowsPerPage,
    page,
    handleChangeRowsPerPage,
    handleChangePage,
  };
};

export { GoodsSupplier, PageSelect };
