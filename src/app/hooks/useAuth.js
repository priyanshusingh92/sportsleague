import { useSelector, useDispatch } from 'react-redux';
import { login } from 'app/store/slices/auth';

const useAuth = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, accessToken } = useSelector((state) => state.auth);

  return {
    isAuthenticated,
    accessToken,

    login: (accessToken) => dispatch(login(accessToken)),
  };
};

export default useAuth;
