import React from 'react';
import { Layout, Menu } from 'antd';
import BusinessLogo from '../assets/images/main logo/business_logo.png'
import { Link, Outlet } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: "A77101",
    label: "Dashboard",
    link: "dashboard"

  },
  {
    key: "A77102",
    label: "Supplies",
    link: "supply-edit"
  },
  {
    key: "A77103",
    label: "Create Supply",
    link: "create-supply"
  },
  {
    key: "A77104",
    label: "Create Testimonial",
    link: "create-testimonial"
  },
]

type MenuItem = {
  key: string;
  label: string;
  link: string;
};

type YourComponentProps = {
  items: MenuItem[];
};

const Dashboard: React.FC<YourComponentProps> = () => {

  return (
    <Layout style={{
      height: "100vh"
    }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" style={{ marginTop: '' }} >
          <img src={BusinessLogo} style={{
            width: '80px',
            marginLeft: '40px',
            marginTop: '15px'
          }} alt="" />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          {items.map((item) => (
            <Menu.Item key={item.key}>
              {item.link === 'dashboard' ? (
                <Link to={`/dashboard`}>{item.label}</Link>
              ) : (
                <Link to={`/dashboard/${item.link}`}>{item.label}</Link>
              )}
            </Menu.Item>
          ))}
          <Menu.Item ><Link to='/'>Home</Link></Menu.Item>
        </Menu>


      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>

        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;