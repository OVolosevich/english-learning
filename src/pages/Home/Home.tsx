import React from 'react';
import { Link } from 'react-router-dom';

const Home = (): JSX.Element => {
  return (
    <div>
      <Link to='/sign-in'>Sign In</Link>
      <br />
      <Link to='/sign-up'>Sign Up</Link>
      <div
        className='g_id_signout'
        onClick={() => {
          google.accounts.id.disableAutoSelect();
        }}
      >
        Sign Out
      </div>
    </div>
  );
};
export default Home;
