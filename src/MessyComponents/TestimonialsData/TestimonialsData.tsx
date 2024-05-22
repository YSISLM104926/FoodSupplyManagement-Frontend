import { Table } from "antd";
import { useGetTestimonialQuery } from "../../redux/features/testimonialApi/testimonial.get.api"
import Navbar from "../Navbar";
const columns = [
    {
      title: 'email',
      dataIndex: 'Email',
      key: 'email',
    },
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'name',
    },
    {
      title: 'Testimonial',
      dataIndex: 'Testimonial',
      key: 'testimonial',
    },
  ];
  

const TestimonialsData = () => {
    const { data: tData } = useGetTestimonialQuery(undefined);
    return (
        <div style={{
            maxWidth: '1440px',
            margin: 'auto',
        }} className="">
            <Navbar />
            <Table className="mt-20 " dataSource={tData} columns={columns} />;
        </div>
    )
}

export default TestimonialsData