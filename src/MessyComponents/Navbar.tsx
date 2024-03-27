import "../index.css"
import BusinessLogo from '../assets/images/main logo/business_logo.png'
import { Link, NavLink } from "react-router-dom"
import React, { useEffect } from "react";


const Navbar = () => {
  const [theme, setTheme] = React.useState('light');
  useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    localStorage.setItem('theme', theme);
  };
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
          {
            <NavLink to='/dashboard'><li><a className="">Dashboard</a></li></NavLink>
          }
          <NavLink to='/leaderboard'><li><a className="">Donors Leaderboard</a></li></NavLink>
          <NavLink to='/community'><li><a className="">Community</a></li></NavLink>
          <label className="swap swap-rotate me-20">
            <input onClick={toggleTheme} type="checkbox" />
            <li className="swap-on">DARKMODE</li>
            <li className="swap-off">LIGHTMODE</li>
          </label>
        </ul>
      </div>

      <div className="dropdown md:hidden lg:hidden">
        <div tabIndex={0} role="button" className="btn m-1">options</div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <NavLink to='/supplies'><li><a className="">All Supplies</a></li></NavLink>
          {
            <NavLink to='/dashboard'><li><a className="">Dashboard</a></li></NavLink>
          }
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
      <div className="navbar-end">
        <div className="dropdown dropdown-bottom btn-info">
          <div tabIndex={0} role="button" className="btn m-1 px-8 font-bold">Login/Register</div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <Link to='/login'><li><a>Login</a></li></Link>
            <Link to='/register'><li><a>Register</a></li></Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar


