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
import CommunityPosts from "../MessyComponents/CommunityPosts/CommunityPosts";
import TestimonialsData from "../MessyComponents/TestimonialsData/TestimonialsData";
import Volunteer from "../MessyComponents/Volunteer";
import AboutUsVolunteers from "../MessyComponents/AboutUs/AboutUsVolunteers";
const items = [
    {
        key: "1",
        label: "Dashboard",
        link: "dashboard"

    },
    {
        key: "2",
        label: "Supplies",
        link: "supply-edit"
    },
    {
        key: "3",
        label: "Create Supply",
        link: "create-supply"
    },
    {
        key: "4",
        label: "Create Testimonial",
        link: "create-testimonial"
    },
    {
        key: "5",
        label: "Community Post",
        link: "communitypost"
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
        path: '/testimonials',
        element: <TestimonialsData/>,
    },
    {
        path: '/volunteer',
        element: <Volunteer/>,
    },
    {
        path: '/aboutus',
        element: <AboutUsVolunteers/>,
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
            {
                path: 'communitypost/:userEmail',
                element: <CommunityPosts />,
            },
        ],
    },
]);
