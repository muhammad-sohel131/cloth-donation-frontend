import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Campaigns from "../Pages/Campaigns/Campaigns";
import CampaignDetails from "../Components/CampaignDetails/CampaignDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashbord/Dashbord";
import HowToHelp from "../Pages/HowToHelp/HowToHelp";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import NotFound from "../Pages/NotFound/NotFound";
import ForgotPassword from "../Pages/ForgetPassword/ForgetPassword";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path:"",
                element: <Home />
            },
            {
                path:"/campaigns",
                element: <Campaigns />
            },
            {
                path: "/howtohelp",
                element: <HowToHelp />
            },
            {
                path: "dashbord",
                element: <PrivateRoute><Dashboard /></PrivateRoute>
            },
            {
                path: 'campaign-details/:id',
                element: <PrivateRoute><CampaignDetails /></PrivateRoute>
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: "/update-profile",
                element: <PrivateRoute><UpdateProfile /></PrivateRoute>
            },
            {
                path: 'forgot-password',
                element: <ForgotPassword />
            }
        ]
    }
])

export default route