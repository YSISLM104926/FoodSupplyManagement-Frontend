import { useForm, SubmitHandler } from "react-hook-form"
import { useSubmitTestimonialMutation } from "../../../redux/features/testimonialApi/testimonial.api";

import { toast } from 'react-toastify';

type FormValues = {
    name: string
    email: string
    testimonial: string
    category: string;
}
const CreateTestimonial = () => {
    const { register, handleSubmit, reset } = useForm<FormValues>()
    const [submitTestimonialData, { isLoading }] = useSubmitTestimonialMutation(undefined);
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const testimonialData = {
                Name: data.name,
                Email: data.email,
                Testimonial: data.testimonial,
                Category: data.category,
            };
            await submitTestimonialData(testimonialData);
            toast.success("Testimonial submitted successfully");
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
        <div className="mt-[100px] w-3/4 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 space-y-4 mx-auto w-1/2 rounded-lg">
                <h1 className="text-start">Name</h1>
                <input className="input input-bordered input-dark w-full" type="text" {...register("name")} placeholder="Name" required />
                <h1 className="text-start">Email</h1>
                <input className="input input-bordered input-dark w-full" type="text" {...register("email")} placeholder="Email" required />
                <h1 className="text-start">Testimonial</h1>
                <textarea className="textarea textarea-bordered h-28" {...register("testimonial")} placeholder="testimonial" required />
                <h1 className="text-start">Category</h1>
                <select className="select select-bordered w-full" required>
                    <option selected>Appreciation</option>
                    <option>Feedback</option>
                    <option>Impact</option>
                </select>
                <br /><br />
                <input className="btn btn-info w-full" type="submit" />
            </form>
        </div>
    )
}

export default CreateTestimonial;