import { useForm, SubmitHandler } from "react-hook-form"
import { toast } from 'react-toastify';
import { useSubmitCommunityCommentMutation } from "../redux/features/CommunityComment/CommunityComment";
import Navbar from "./Navbar";

type FormValues = {
    name: string
    comment: string

}
const Community = () => {
    const { register, handleSubmit, reset } = useForm<FormValues>()
    const [submitCommentData, { isLoading }] = useSubmitCommunityCommentMutation(undefined);
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const testimonialData = {
                Name: data.name,
                Comment: data.comment,
            };
            await submitCommentData(testimonialData);
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
                    <h1 className="text-start">Name</h1>
                    <input className="input input-bordered input-dark w-full" type="text" {...register("name")} placeholder="Name" required />
                    <h1 className="text-start">Comment</h1>
                    <textarea className="textarea textarea-bordered h-28" {...register("comment")} placeholder="Comment" required />
                    <br /><br />
                    <input className="btn btn-info w-full" type="submit" />
                </form>
            </div>
        </div>
    )
}

export default Community;