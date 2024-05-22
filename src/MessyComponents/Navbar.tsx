import "../index.css"
import BusinessLogo from '../assets/images/main logo/business_logo.png'
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { toast } from "sonner";

type userType = {
  name: string;
  email: string;
}

const Navbar = () => {
  // Set the initial state from localStorage or default to 'light'
  const initialTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(initialTheme);
  const navigate = useNavigate();
  useEffect(() => {
    // Update the data-theme attribute of the html element
    document.querySelector('html')?.setAttribute('data-theme', theme);
    // Update the localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };





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





  const handleLogOut = () => {
    setToken(null);
    localStorage.setItem('Token', '');
    toast.success(`${userName} logged out successfully`)
    navigate('/login');
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link to='/'><a className="btn btn-ghost text-xl"><img src={BusinessLogo} style={{
          width: '70px'
        }} alt="" /></a></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 justify-center items-center">
          <NavLink to='/supplies'><li><a className="">All Supplies</a></li></NavLink>
          <NavLink to='/community'><li><a className="">Community</a></li></NavLink>
          <NavLink to='/leaderboard'><li><a className="">Donors Leaderboard</a></li></NavLink>
          <NavLink to='/testimonials'><li><a className="">Testimonials</a></li></NavLink>
          {
            userEmail ? 
            <NavLink to='/volunteer'><li><a className="">Be a Volunteer</a></li></NavLink>
            :
            <NavLink to='/register'><li><a className="">Be a Volunteer</a></li></NavLink>
          }
          <NavLink to='/aboutus'><li><a className="">About Us</a></li></NavLink>
          <li><label className="swap swap-rotate">

            {/* this hidden checkbox controls the state */}
            <input onClick={toggleTheme} type="checkbox" />

            {/* sun icon */}
            <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

            {/* moon icon */}
            <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

          </label></li>
        </ul>
      </div>

      <div className="dropdown md:hidden lg:hidden">
        <div tabIndex={0} role="button" className="btn m-1">options</div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <NavLink to='/supplies'><li><a className="">All Supplies</a></li></NavLink>
          <NavLink to='/leaderboard'><li><a className="">Donors Leaderboard</a></li></NavLink>
          <NavLink to='/community'><li><a className="">Community</a></li></NavLink>
          <li><a className="">Community</a></li>
          <label className="swap swap-rotate me-20">
            <input onClick={toggleTheme} type="checkbox" />
            <li className="swap-on">DARKMODE</li>
            <li className="swap-off">LIGHTMODE</li>
          </label>
        </ul>
      </div>
      {
        userEmail ?
          <div className="navbar-end">
            <div className="dropdown dropdown-bottom btn-info">
              <div tabIndex={0} role="button" className={`btn m-1 px-8 font-bold ${theme === 'dark' ? 'text-black' : 'text-white'}`}>{userName}</div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a><NavLink to='/dashboard'>Dashboard</NavLink></a></li>
                <li><a onClick={handleLogOut}>Logout</a></li>
              </ul>
            </div>
          </div>
          :
          <div className="navbar-end">
            <div className="dropdown dropdown-bottom btn-info">
              <div tabIndex={0} role="button" className={`btn m-1 px-8 font-bold ${theme === 'dark' ? 'text-black' : 'text-white'}`}>Login/Register</div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <Link to='/login'><li><a>Login</a></li></Link>
                <Link to='/register'><li><a>Register</a></li></Link>
              </ul>
            </div>
          </div>
      }
    </div>
  )
}

export default Navbar


