import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Navbar.css';
import { useAuth } from '../../Context/useAuth';

interface Props {}

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logout, loginUser } = useAuth();
  return (
    <nav className='relative container mx-auto p-6'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-20'>
          <Link to='/'>
            <img src={logo} width='200' height='100' alt='TradeMonkey Logo' />
          </Link>
        </div>
        {isLoggedIn() ? (
          <>
            <div className='hidden font-bold lg:flex'>
              <Link to='/search' className='text-black hover:text-darkBlue'>
                Search
              </Link>
            </div>
            <div className='hidden lg:flex items-center space-x-6 text-back'>
              <div className='hover:text-darkBlue'>
                Welcome, {user?.userName}
              </div>
              <a
                onClick={logout}
                className='px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70'
              >
                Logout
              </a>
            </div>
          </>
        ) : (
          <div className='hidden lg:flex items-center space-x-6 text-back'>
            <Link to='/login' className='hover:text-darkBlue'>
              Login
            </Link>
            <Link
              to='/register'
              className='px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70'
            >
              Signup
            </Link>
            <Link
              to=''
              onClick={() => loginUser('example123', 'Example&^7676')} // please don't hack me
              className='px-8 py-3 font-bold rounded text-white bg-red-400 hover:opacity-70'
            >
              JUST GET ME INSIDE (TEST USER)
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
