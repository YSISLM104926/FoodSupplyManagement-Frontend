import { useForm, SubmitHandler } from "react-hook-form"
import { toast } from 'react-toastify';
import Navbar from "./Navbar";
import { useSubmitVolunteerDataMutation } from "../redux/features/VolunteerApi/volunteer.api";

type FormValues = {
    email: string
    phoneNumber: Number;
    location: string;
}
const Volunteer = () => {
    const { register, handleSubmit, reset } = useForm<FormValues>()
    const [submitVolunteerData, { isLoading }] = useSubmitVolunteerDataMutation(undefined);
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const volunteerData = {
                Email: data.email,
                PhoneNumber: data.phoneNumber,
                Location: data.location
            };
            await submitVolunteerData(volunteerData);
            toast.success("Comment added successfully");
            reset();
            // Handle successful submission (if needed)
        } catch (error) {
            // Handle submission error
            console.error('Error submitting testimonial:', error);
            toast.error("error...");
            // You can display a toast notification, show an error message, etc.
        }
    };

    if (isLoading) {
        <p>Loading.......</p>
    }

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
                    <input className="input input-bordered input-dark w-full" type="number" {...register("phoneNumber")} placeholder="Phone Number" required />
                    <h1 className="text-start">Email</h1>
                    <input className="input input-bordered input-dark w-full" type="text" {...register("location")} placeholder="Location" required />
                    <br /><br />
                    <input className="btn btn-info w-full" type="submit" />
                </form>
            </div>
        </div>
    )
}

export default Volunteer;