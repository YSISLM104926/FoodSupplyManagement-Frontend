
import { useForm, SubmitHandler } from "react-hook-form"
import { toast } from "react-toastify";

type FormValues = {
    image?: string;
    title: string
    category: string
    quantity: string
    description: string
    file: FileList;
}
const CreateSupply = () => {
    const formData = new FormData();
    console.log(formData);
    const { register, handleSubmit } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const formData = new FormData();
            console.log(data)
            formData.append("image", data.file[0]);

            console.log(data.file[0].name);

            const response = await fetch(`https://api.imgbb.com/1/upload?key=a11421cfdcf0839c3f5a4226ef16e14b`, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Image uploaded successfully:", result);
                const supp = {
                    image: result.data.url,
                    title: data.title,
                    category: data.category,
                    quantity: data.quantity,
                    description: data.description,
                };

                console.log(supp);

                try {
                    const res = await fetch('http://localhost:5000/supplies', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(supp),
                    });

                    if (res.ok) {
                        const result = await res.json();
                        console.log('Uploaded', result);
                        toast.success("Upload successfully");
                    } else {
                        console.error('Error uploading:', res.statusText);
                    }
                } catch (error) {
                    console.error('Error during fetch:', error);
                }
            } else {
                console.error("Image upload failed:", response.statusText);
            }
        } catch (error) {
            console.error("Error during image upload:", error);
        }
    };
    return (
        <div className="mt-[100px] w-3/4 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 space-y-4 mx-auto w-1/2 rounded-lg">
                <h1 className="text-start">Title</h1>
                <input className="input input-bordered input-dark w-full" type="text" {...register("title")} placeholder="Title" />
                <h1 className="text-start">Category</h1>
                <input className="input input-bordered input-dark w-full" type="text" {...register("category")} placeholder="Category" />
                <h1 className="text-start">Quantity</h1>
                <input className="input input-bordered input-dark w-full" type="text" {...register("quantity")} placeholder="Quantity" />
                <h1 className="text-start">Image</h1>
                <input type="file" className="file-input file-input-bordered w-full" {...register("file", { required: true })} />
                <h1 className="text-start">Description</h1>
                <textarea className="textarea textarea-bordered h-28" {...register("description")} placeholder="description"></textarea>
                <input className="btn btn-info w-full" type="submit" />
            </form>
        </div>
    )
}

export default CreateSupply