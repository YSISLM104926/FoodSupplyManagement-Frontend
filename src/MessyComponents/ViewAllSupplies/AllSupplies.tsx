import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { useGetAllDatasQuery } from '../../redux/api/baseApi'
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

const AllSupplies: React.FC = () => {
    const { data: suppliesData, isLoading, isError } = useGetAllDatasQuery(undefined);
    
    if (isLoading) {
        return <p>Loading....</p>
    }
    if (isError) {
        return <p>Something went wrong!</p>
    }
    return (

        <>
            <div className='max-w-[1440px] mx-auto'>
                <Navbar/>
                <div className='mt-16'>
                    <h1 className='text-3xl text-center mt-12 font-bold'>All Supplies</h1>
                    <div className='flex justify-center items-center'>
                        <motion.div
                            variants={fadeIn("down", 0.1)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.5 }}
                            className='grid lg:grid-cols-3 mt-4 gap-12'
                        >
                            {
                                suppliesData.map((supply : any) => (
                                    <div className="card w-96 glass mt-12" key={supply.id}>
                                        <figure><img src={supply.image} alt={supply.title} /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{supply.title}</h2>
                                            <p className='text-green-500'>{supply.category}</p>
                                            <p className='text-green-500'>{supply.quantity}</p>
                                            <div className="card-actions justify-end">
                                            <Link to={`/supplies/${supply._id}`}><button className="btn bg-blue-500">View Details</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllSupplies