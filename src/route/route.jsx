import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Campaigns from "../Pages/Campaigns/Campaigns";
import CampaignDetails from "../Components/CampaignDetails/CampaignDetails";

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
                path: "/help",
                element: <h3>How it works</h3>
            },
            {
                path: "dashbord",
                element: <h3>Dashboard</h3>
            },
            {
                path: 'campaign-details/:id',
                element: <CampaignDetails />
            }
        ]
    }
])

export default route