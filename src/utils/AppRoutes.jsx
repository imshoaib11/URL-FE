import Signup from "../components/Signup";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import Reset from "../components/Reset";
import { Navigate } from "react-router-dom";
import Link from "../components/Link";

export default [
    {
        path:'/signup',
        element: <Signup/>
    },
    {
        path:'/login',
        element: <Login/>
    },
    {
        path:'/dashboard',
        element: <Dashboard/>
    },
    {
        path:'/reset',
        element: <Reset/>
    },
    {
        path:'/link',
        element: <Link/>
    },
    {
        path:'*',
        element: <Navigate to= '/login'/>
    }
]