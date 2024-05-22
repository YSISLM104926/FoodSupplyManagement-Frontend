import { useForm, SubmitHandler } from "react-hook-form"
import { useEffect, useState } from "react";
import { useSubmitCommunityCommentMutation } from "../../redux/features/CommunityComment/CommunityComment";
import { toast } from "sonner";
import Navbar from "../Navbar";
import { jwtDecode } from "jwt-decode";

type FormValues = {
    name: string
    comment: string

}

type userType = {
    name: string;
    email: string;
}


const CommunityPosts = () => {
    const [userEmail, setUserEmail] = useState<string>('');
    const [userName, setUserName] = useState<string | null>(null);
    const { register, handleSubmit, reset } = useForm<FormValues>()
    const [submitCommentData, { isLoading }] = useSubmitCommunityCommentMutation(undefined);
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const testimonialData = {
                Email : userEmail,
                Name : userName,
                Comment: data.comment
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

    const [token, setToken] = useState<string | null>(null);
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


    if (isLoading) {
        <p>Loading.......</p>
    }

    return (
        <div className="w-3/4 mx-auto">
            <div
                style={{
                    maxWidth: '1440px',
                    margin: 'auto',
                }}
            >
                <div className="mt-[100px] w-3/4 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 space-y-4 mx-auto w-1/2 rounded-lg">
                        <h1 className="text-start">Email</h1>
                        <input className="input input-bordered input-dark w-full" type="text" {...register("name")} value={userEmail} disabled/>
                        <h1 className="text-start">Comment</h1>
                        <textarea className="textarea textarea-bordered h-28" {...register("comment")} placeholder="Comment" required />
                        <br /><br />
                        <input className="btn btn-info w-full" type="submit" />
                    </form>
                </div>
            </div>

        </div>
    )
}

export default CommunityPosts