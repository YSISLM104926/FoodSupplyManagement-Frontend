import { useParams } from "react-router-dom";
import { useGetAllDatasQuery } from "../redux/api/baseApi";

type Tsupply = {
  id : number,
  image : string,
  title : string,
  category: string,
  quantity: string
  description: string
}

const SupplyPostCard = () => {
  const {data : suppliesData} = useGetAllDatasQuery(undefined);
  const { supplyId } = useParams();
  const suppliesDataItem = suppliesData.find((s:any) => s._id === supplyId);
  const { image, title, category, quantity, description } = suppliesDataItem as Tsupply;
  return (
    <div className="w-3/4 mx-auto mt-12">
      <div className="card lg:card-side shadow-xl">
        <figure><img src={image} alt={title} className="" /></figure>
        <div className="card-body mt-8">
          <h2 className="card-title text-5xl font-bold">{title}</h2>
          <p className="text-2xl">{category} <br /> <span className="text-green-400">Quantity : {quantity}</span></p>
          <p><span className="font-bold">Description:</span> {description}</p>
          <div className="card-actions">
            <button className="btn btn-info w-full">Donate Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyPostCard;
