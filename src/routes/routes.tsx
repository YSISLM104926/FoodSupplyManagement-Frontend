import { createBrowserRouter } from "react-router-dom";
import Login from "../MessyComponents/Login/Login";
import Register from "../MessyComponents/Register/Register";
import App from "../App";
import Dashboard from "../MessyComponents/Dashboard";
import AllSupplies from "../MessyComponents/ViewAllSupplies/AllSupplies";
import SupplyPostCard from "../MessyComponents/SupplyPostCard";
import AdminSuppliesEdit from "../MessyComponents/AdminComponents/AdminSuppliesEdit/AdminSuppliesEdit";
import CreateSupply from "../MessyComponents/AdminComponents/CreateSupply/CreateSupply";
import CreateTestimonial from "../MessyComponents/AdminComponents/CreateTestimonial/CreateTestimonial";
import DonorLeaderboard from "../MessyComponents/DonorLeaderboard";
import Community from "../MessyComponents/Community";
const items = [
    {
        key: "A77101",
        label: "Dashboard",
        link: "dashboard"

    },
    {
        key: "A77102",
        label: "Supplies",
        link: "supply-edit"
    },
    {
        key: "A77103",
        label: "Create Supply",
        link: "create-supply"
    },
    {
        key: "A77104",
        label: "Create Testimonial",
        link: "create-testimonial"
    },
]
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/supplies',
        element: <AllSupplies />,
    },
    {
        path: '/leaderboard',
        element: <DonorLeaderboard />,
    },
    {
        path: '/community',
        element: <Community />,
    },
    {
        path: '/supplies/:supplyId',
        element: <SupplyPostCard />,
    },
    {
        path: '/dashboard',
        element: <Dashboard items={items} />,
        children: [
            // {
            //     index: true,
            //     element: <Chart/>
            // },
            {
                path: 'supply-edit',  // Absolute path starting with /dashboard
                element: <AdminSuppliesEdit />,
            },
            {
                path: 'create-supply',  // Absolute path starting with /dashboard
                element: <CreateSupply />,
            },
            {
                path: 'create-testimonial',  // Absolute path starting with /dashboard
                element: <CreateTestimonial />,
            },
        ],
    },
]);
