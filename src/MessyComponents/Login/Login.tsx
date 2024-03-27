
import { useForm, SubmitHandler } from "react-hook-form"
import Navbar from "../Navbar"
import { useLoginMutation } from "../../redux/features/auth/authApi"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

type FormValues = {
    email: string
    password: string
}
const Register = () => {

    const { register, handleSubmit, reset } = useForm<FormValues>();
    const navigate = useNavigate();
    const [login] = useLoginMutation(undefined);
    const onSubmit: SubmitHandler<FormValues> = async(data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        }
        await login(userInfo);
        reset();
        navigate('/');
        toast.success(`${userInfo.email} login completed`);
    }
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Navbar />
            <div className="mt-[200px] w-1/2 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 space-y-4 mx-auto w-1/2 rounded-lg">
                    <h1 className="text-start">Email</h1>
                    <input className="input input-bordered input-dark w-full max-w-xs" type="email" {...register("email")} placeholder="Email" />
                    <h1 className="text-start">Password</h1>
                    <input className="input input-bordered input-dark w-full max-w-xs" type="password" {...register("password")} placeholder="Password" />
                    <input className="btn btn-info w-full max-w-xs" type="submit" />
                </form>
            </div>
        </div>
    )
}

export default Register