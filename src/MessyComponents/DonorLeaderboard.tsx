import { Table } from "antd";
import { useGetLeaderDonorLeaderboardQuery } from "../redux/features/donor/DonorLeaderboard.api"
import Navbar from "./Navbar";

const columns = [
    {
      title: 'Donor Name',
      dataIndex: 'donor_name',
      key: 'donor_name',
    },
    {
      title: 'Total Donation',
      dataIndex: 'total_donation',
      key: 'total_donation',
    },
    {
      title: 'Last Donation Date',
      dataIndex: 'last_donation_date',
      key: 'last_donation_date',
    },
    {
      title: 'Contact Email',
      dataIndex: 'contact_email',
      key: 'contact_email',
    },
    {
      title: 'Contact Phone',
      dataIndex: 'contact_phone',
      key: 'contact_phone',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
  ];
  

 


const DonorLeaderboard = () => {
    const { data: DonorLeaderboard } = useGetLeaderDonorLeaderboardQuery(undefined);
    console.log(DonorLeaderboard);
    return (
        <div style={{
            maxWidth: '1440px',
            margin: 'auto',
          }} className="">
            <Navbar/>
            <Table className="mt-20 " dataSource={DonorLeaderboard} columns={columns} />;
        </div>
    )
}

export default DonorLeaderboard