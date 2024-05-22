import { Table } from "antd";
import Navbar from "./Navbar";
import { useGetCommunityCommentQuery } from "../redux/features/CommunityComment/CommunityComment";

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
      title: 'Comments',
      dataIndex: 'Comment',
      key: 'comment',
    },
  ];
  

 


const Community = () => {
    const { data: CommunityComments } = useGetCommunityCommentQuery(undefined);
    console.log(CommunityComments)
    return (
        <div style={{
            maxWidth: '1440px',
            margin: 'auto',
          }} className="">
            <Navbar/>
            <Table className="mt-20" dataSource={CommunityComments} columns={columns} />;
        </div>
    )
}

export default Community