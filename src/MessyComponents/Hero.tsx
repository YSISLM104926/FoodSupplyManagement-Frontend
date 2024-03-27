import heroImg from '../assets/images/hero.jpg'
import { motion } from 'framer-motion'
import { fadeIn } from './variants'
const Hero = () => {
    
    return (
        <>
            
                <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <div className="hero mt-12">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src={heroImg} className="max-w-[1/2] lg:w-1/2 rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-6xl font-bold">Sysco here for you</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-info">Get Started</button>
                            </div>
                        </div>
                    </div>
                </motion.div>
          
        </>
    )
}

export default Hero