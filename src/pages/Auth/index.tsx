import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { encrypt } from './services';
import usersApiClient from '../../api/UsersClient/UsersClient';
import { useUserStore } from '../../store';

const Auth = (): JSX.Element => {
  const userEmail = useUserStore((state) => state.email);
  const setUserEmail = useUserStore((state) => state.setEmail);
  const navigate = useNavigate();
  useEffect(() => {
    const googleButton = document.getElementById('google-signin-button');
    google.accounts.id.initialize({
      client_id:
        '983865956836-ehqa2t8fnjgen55eberv9ugv57qunej7.apps.googleusercontent.com',
      callback: (response) => {
        setUserEmail(jwt_decode(response.credential).email);
      },
      auto_select: true,
    });
    if (googleButton) {
      google.accounts.id.renderButton(googleButton, {
        theme: 'outline',
        size: 'large',
      });
    }

    google.accounts.id.prompt();
  }, []);
  useEffect(() => {
    if (userEmail.length > 0) {
      const encryptedEmail = encrypt(userEmail);
      usersApiClient
        .registerUser(encryptedEmail)
        .then((res) => {
          console.log(res, 'works');
        })
        .catch((err) => {
          console.log(err, 'err');
        });
    }
  }, [userEmail]);

  useEffect(() => {
    if (userEmail) {
      navigate('/');
    }
  }, [userEmail]);

  return (
    <div>
      {!userEmail && <div id='google-signin-button'></div>}
      <Link to='/sign-up'>Sign Up</Link>
      <Link to='/'>Home</Link>
    </div>
  );
};
export default Auth;
