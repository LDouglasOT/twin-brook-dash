import { Navigate, Outlet } from "react-router-dom";
import { Login } from "./components";

const useAuth=()=>{
    const user={userLoggedIn:true}
    return user && user.userLoggedIn;
}

const ProtectedRoutes=()=>{
    const isAuth=useAuth()

return isAuth ? <Outlet/> :<Navigate to='Login'/> 

}
export default ProtectedRoutes