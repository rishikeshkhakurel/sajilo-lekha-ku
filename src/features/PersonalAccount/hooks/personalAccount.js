import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import http_config from "../../../common/config/httpconfig/http_config"
import axiosInstance from "../../../common/helper/axiosInterceptor"

const Personal = () => {

    const[ fetchData, setFetchData ]  = useState({});

    const location = useLocation();

    const data = location.state;
    
    console.log(data);
  
    useEffect(()=> {
     axiosInstance.get(http_config.BASE_URL + `/api/customerPersonalAccount?id=${data}`).then(res => setFetchData(res)
     )
    } , []);



return{
   
   fetchData 

}

}

export default Personal;