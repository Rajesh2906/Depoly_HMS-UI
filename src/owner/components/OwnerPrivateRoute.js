import { Navigate } from "react-router-dom";
import authService from "../services/auth.service";


const OwnerPrivateRoute=({ children }) =>{
    // const user =authService.getCurrentUser();
    const user =true;
     return user?children:<Navigate to="/unauthorize" />;
    };
 
 export default OwnerPrivateRoute;