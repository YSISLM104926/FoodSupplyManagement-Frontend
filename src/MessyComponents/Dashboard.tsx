import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import BusinessLogo from '../assets/images/main logo/business_logo.png'
import { Link, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: "1",
    label: "Chart Page",
    link: "dashboard"

  },
  {
    key: "2",
    label: "Supplies",
    link: "supply-edit"
  },
  {
    key: "3",
    label: "Create Supply",
    link: "create-supply"
  },
  {
    key: "4",
    label: "Create Testimonial",
    link: "create-testimonial"
  },
  {
    key: "5",
    label: "Community Post",
    link: "communitypost"
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
type userType = {
  name: string;
  email: string;
}

const Dashboard: React.FC<YourComponentProps> = () => {
  const [token, setToken] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  useEffect(() => {
    const accessToken: string | null = localStorage.getItem('Token');
    if (accessToken) {
      setToken(accessToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      const { email, name }: userType = jwtDecode(token);
      setUserEmail(email);
      setUserName(name);
    }
  }, [token]);
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
                <Link to={`${item.link === 'communitypost' ?
                  `/dashboard/${item.link}/${userEmail}` : `/dashboard/${item.link}`
                  }`}>{item.label}</Link>
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