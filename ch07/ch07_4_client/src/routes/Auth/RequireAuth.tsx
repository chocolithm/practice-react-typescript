import type { FC, PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts';

type RequireAuthProps = {};

const RequireAuth: FC<PropsWithChildren<RequireAuthProps>> = ({ children }) => {
  const { jwt } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!jwt) navigate('/login');
  }, [jwt, navigate]);

  return <>{children}</>;
};

export default RequireAuth;
