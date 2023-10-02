import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import SignUpPage from './src/pages/SignUpPage/SignUpPage.tsx';

const App = (): JSX.Element => {
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        '983865956836-ehqa2t8fnjgen55eberv9ugv57qunej7.apps.googleusercontent.com',
      // callback: (response) => console.log(jwt_decode(response.credential)),
      callback: (response) => console.log(response),
    });

    google.accounts.id.renderButton(
      document.getElementById('google-signin-button'),
      { theme: 'outline', size: 'large' }
    );
  }, []);

  return (
    <div>
     <div id='google-signin-button'></div>
    </div>
  );
};
export default App;
