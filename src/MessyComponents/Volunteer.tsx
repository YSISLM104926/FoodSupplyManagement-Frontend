import { useForm, SubmitHandler } from "react-hook-form"
import Navbar from "./Navbar";
import { useSubmitVolunteerDataMutation } from "../redux/features/VolunteerApi/volunteer.api";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

type FormValues = {
    email: string
    phoneNumber: Number;
    location: string;
}

type userType = {
    name: string;
    email: string;
}

// interface VolunteerResponse {
//      data : {
//         result : any;
//         success : boolean;
//      }
// }

const Volunteer = () => {
    const { register, handleSubmit, reset } = useForm<FormValues>()
    const [submitVolunteerData] = useSubmitVolunteerDataMutation(undefined);
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const volunteerData = {
                Email: data.email,
                PhoneNumber: data.phoneNumber,
                Location: data.location,
                role: 'volunteer'
            };
            await submitVolunteerData(volunteerData);
            toast.success(`${data?.email} added as volunteer successfully`);
            reset();
            // Handle successful submission (if needed)
        } catch (error) {
            // Handle submission error
            console.error('Error submitting testimonial:', error);
            toast.error("error...");
            // You can display a toast notification, show an error message, etc.
        }
    };

    const [token, setToken] = useState<string | null>(null);
    const [userEmail, setUserEmail] = useState<string>('');
    const [userName, setUserName] = useState<string | null>(null);
    useEffect(() => {
        const accessToken: string | null = localStorage.getItem('Token');
        if (accessToken) {
            setToken(accessToken);
        }
    }, []);

    useEffect(() => {
        if (token) {
            const { email, name }: userType = jwtDecode(token);
            setUserEmail(email);
            setUserName(name);
        }
    }, [token]);

    console.log(userEmail)
   
    const res  = axios.get(`http://localhost:5000/volunteer/${userEmail}`) ;


    return (
        <div
            style={{
                maxWidth: '1440px',
                margin: 'auto',
            }}
        >
            <Navbar />
            <div className="mt-[100px] w-3/4 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 space-y-4 mx-auto w-1/2 rounded-lg">
                    <h1 className="text-start">Email</h1>
                    <input className="input input-bordered input-dark w-full" type="email" {...register("email")} placeholder="Email" required />
                    <h1 className="text-start">Phone Number</h1>
                    <input className="input input-bordered input-dark w-full" type="number" {...register("phoneNumber")} placeholder="ex. 01955535455" required />
                    <h1 className="text-start">Location</h1>
                    <input className="input input-bordered input-dark w-full" type="text" {...register("location")} placeholder="Location" required />
                    <br /><br />
                    <input className="btn btn-info w-full" type="submit" />
                </form>
            </div>
        </div>
    )
}

export default Volunteer;