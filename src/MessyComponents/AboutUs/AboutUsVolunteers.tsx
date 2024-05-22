import { Table } from "antd";
import Navbar from "../Navbar";
import { useGetVolunteerDataQuery } from "../../redux/features/VolunteerApi/volunteer.get.data";
const columns = [
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'PhoneNumber',
      key: 'PhoneNumber',
    },
    {
      title: 'Location',
      dataIndex: 'Location',
      key: 'location',
    },
  ];
  

const AboutUsVolunteers = () => {
    const { data: tData } = useGetVolunteerDataQuery(undefined);
    return (
        <div style={{
            maxWidth: '1440px',
            margin: 'auto',
        }} className="">
            <Navbar />
            <h1 className="text-4xl font-bold mt-20">Our volunters list</h1>
            <Table className="mt-4" dataSource={tData} columns={columns} />;
        </div>
    )
}

export default AboutUsVolunteers