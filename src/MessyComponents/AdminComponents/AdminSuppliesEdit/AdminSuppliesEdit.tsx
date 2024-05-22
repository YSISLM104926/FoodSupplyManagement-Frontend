// AdminSuppliesEdit.tsx
import React from 'react';
import { useGetAllDatasQuery } from '../../../redux/api/baseApi';
import toast from 'react-hot-toast';

const AdminSuppliesEdit: React.FC = () => {
  const { data: suppliesData, isLoading, isError } = useGetAllDatasQuery(undefined);
  if (isLoading) {
    return <p>Loading....</p>
  }
  if (isError) {
    return <p>Something went wrong!</p>
  }
  


    const handleDelete = async (id: any) => {
      console.log('asi mama');
      try {
        console.log(id);
        console.log('again asi mama')
        const response = await fetch(`http://localhost:5000/supplies/${id}`, {
          method: "DELETE",
        });

        console.log("Response:", response);

        if (response.ok) {
          const result = await response.json();
          console.log("Deleted successfully", result);
          toast.success(`${id} deleted successfully`);
        } else {
          const errorResponse = await response.json();
          console.error("Deletion failed", response.status, response.statusText, errorResponse.error);
          toast.error(`Deletion failed: ${errorResponse.error}`);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        toast.error("Error during deletion");
      }
    };

  console.log(suppliesData);
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-lg">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {
              suppliesData.map((supply: any, i: number) => (
                <tr>
                  <th>{i + 1}</th>
                  <td>{supply.title}</td>
                  <td>{supply.category}</td>
                  <td>{supply.quantity}</td>
                  <button onClick={() => handleDelete(supply._id)} className='btn btn-xs bg-red-400 hover:bg-red-500'>delete</button>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminSuppliesEdit;