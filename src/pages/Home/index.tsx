import { useEffect } from 'react';
import { useUserStore } from '../../store';
import { useNavigate } from 'react-router-dom';

const Home = (): JSX.Element => {
  const navigate = useNavigate();
  const userEmail = useUserStore((state) => state.email);
  const setUserEmail = useUserStore((state) => state.setEmail);
  useEffect(() => {
    if (!userEmail) {
      navigate('/sign-in');
    }
  }, [userEmail]);
  return (
    <div>
      <div
        className='g_id_signout'
        onClick={() => {
          google.accounts.id.disableAutoSelect();
          setUserEmail('');
        }}
      >
        Sign Out
      </div>
      <h1>HOME PAGE</h1>
    </div>
  );
};
export default Home;
