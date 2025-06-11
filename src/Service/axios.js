import axios from "axios";
import {jwtDecode} from 'jwt-decode'
import { useDispatch } from "react-redux";
import { logout } from "../Redux_toolkit/Features/auth";

const axiosinstance=axios.create({
    baseURL:"https://server-eveen.railway.internal/api",
    withCredentials:true
});

let safeStore;
export const injectStore = (_store) => {
safeStore = _store;
};
axiosinstance.interceptors.request.use((config)=>{
    if(safeStore){

        const token=safeStore.getState().auth.token
        if(token){
            
            const decode=jwtDecode(token)
            const now=Date().now/1000
            if(decode.exp < now){
                console.log('token Expired')
                store.dispatch(logout())
                throw new Error('Token expired');
                // throw new error
            }
            config.headers.Authorization=`Bearer ${token}`
            console.log('token checked')
        } return config
    }
    },(error)=>Promise.reject(error))
    
    export default axiosinstance;
