import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Campaigns from "../Pages/Campaigns/Campaigns";
import CampaignDetails from "../Components/CampaignDetails/CampaignDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashbord/Dashbord";
import HowToHelp from "../Pages/HowToHelp/HowToHelp";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
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
                element: <Dashboard />
            },
            {
                path: 'campaign-details/:id',
                element: <CampaignDetails />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }
])

export default route