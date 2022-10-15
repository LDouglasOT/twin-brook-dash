import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Login } from "./components";
import { AuthContext } from './Context/AuthContext';


const useAuth=(authenticated,authenticate)=>{
    const user={userLoggedIn:authenticated}
    return user && user.userLoggedIn;
}

const ProtectedRoutes=()=>{
    const {authenticated}=useContext(AuthContext)
    const isAuth=useAuth(authenticated)

return isAuth ? <Outlet/> :<Navigate to='Login'/> 

}
export default ProtectedRoutes