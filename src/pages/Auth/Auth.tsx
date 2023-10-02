import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const Auth = (): JSX.Element => {
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        '983865956836-ehqa2t8fnjgen55eberv9ugv57qunej7.apps.googleusercontent.com',
      callback: (response) => { console.log(jwt_decode(response.credential)); },
      auto_select: true,
    });

    google.accounts.id.renderButton(
      document.getElementById('google-signin-button'),
      { theme: 'outline', size: 'large' }
    );
    google.accounts.id.prompt();
  }, []);
  return (
    <div>
     <div id='google-signin-button'></div>
     <Link to='/sign-up'>Sign Up</Link>
     <Link to='/'>Home</Link>
    </div>
  );
};
export default Auth;
