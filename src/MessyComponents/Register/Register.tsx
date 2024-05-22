
import { useForm, SubmitHandler } from "react-hook-form"
import Navbar from "../Navbar"
import { useRegistersMutation } from "../../redux/features/auth/authApi"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

type FormValues = {
    name: string
    email: string
    password: string
}


type ResponseRegister = {
    data: {
        success: boolean;
        message: string;
        token: string;
    }
}


const Register = () => {
    const { register, handleSubmit, reset } = useForm<FormValues>()
    const [registers] = useRegistersMutation(undefined);
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        console.log(data);
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password
        }
        const res = await registers(userInfo) as ResponseRegister;
        if (res?.data?.success === true) {
            localStorage.setItem('Token', res?.data?.token);
            toast.success(`${userInfo.email} login completed`);
            reset();
            navigate('/');
        } else {
            reset();
            toast.error('something went wrong!');
        }
    }
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Navbar />
            <div className="mt-[200px] w-1/2 mx-auto">
                <h1 className="text-center text-4xl me-16 mb-4 font-bold">Register</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 space-y-4 mx-auto w-1/2 rounded-lg">
                    <h1 className="text-start">Name</h1>
                    <input className="input input-bordered input-dark w-full max-w-xs" {...register("name")} placeholder="Name" />
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