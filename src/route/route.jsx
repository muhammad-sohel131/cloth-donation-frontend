import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path:"",
                element: <h2>Home</h2>
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