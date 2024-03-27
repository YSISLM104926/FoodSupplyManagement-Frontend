import { Link } from "react-router-dom"

const ViewAllSupplies = () => {
  return (
    <div className="flex justify-center items-center mt-10">
        <Link to='/supplies'><button className="btn btn-outline btn-info">View All Supplies</button></Link>
    </div>
  )
}

export default ViewAllSupplies