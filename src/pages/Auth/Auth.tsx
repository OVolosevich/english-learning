import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { encrypt } from './services';
import usersApiClient from './../../api/UsersClient/UsersClient';

const Auth = (): JSX.Element => {
  const [userEmail, setUserEmail] = useState<string>('');
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        '983865956836-ehqa2t8fnjgen55eberv9ugv57qunej7.apps.googleusercontent.com',
      callback: (response) => {
        setUserEmail(jwt_decode(response.credential).email);
        console.log(jwt_decode(response.credential));
      },
      auto_select: true,
    });

    google.accounts.id.renderButton(
      document.getElementById('google-signin-button'),
      { theme: 'outline', size: 'large' }
    );
    google.accounts.id.prompt();
  }, []);
  useEffect(() => {
    if (userEmail.length > 0) {
      const encryptedEmail = encrypt(userEmail);
      console.log(encryptedEmail, 'encryptedEmail');
      usersApiClient.registerUser(encryptedEmail)
        .then((res) => {
          console.log(res, 'works');
        })
        .catch((err) => {
          console.log(err, 'err');
        });
    }
  }, [userEmail]);
  return (
    <div>
      <div id='google-signin-button'></div>
      <Link to='/sign-up'>Sign Up</Link>
      <Link to='/'>Home</Link>
    </div>
  );
};
export default Auth;
