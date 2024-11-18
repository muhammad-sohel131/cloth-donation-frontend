import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";

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
                element: <h3>Campaigns</h3>
            },
            {
                path: "/help",
                element: <h3>How it works</h3>
            },
            {
                path: "dashbord",
                element: <h3>Dashboard</h3>
            }
        ]
    }
])

export default route