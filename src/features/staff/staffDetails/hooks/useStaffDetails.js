import axiosInstance from "../../../../common/helper/axiosInterceptor.js";
import http_config from "../../../../common/config/httpconfig/http_config";
import { useDispatch } from "react-redux";
import staffSlice from "../../../../redux/slice/staffSlice.js";
import { useEffect } from "react";

const useStaffDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axiosInstance.get(http_config.BASE_URL + "/api/displayStaff").then((response) => {
        dispatch(staffSlice.actions.setData(response.staffs));
        console.log(response.staffs);
      });
  }, []);
};

export default useStaffDetails;
