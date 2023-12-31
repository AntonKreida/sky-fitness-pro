import { Outlet, useLocation } from 'react-router-dom';

import { Header } from '../../components/header/header';
import * as Styled from './layout.styled';


const currentLocation = {
  homePage: 'sky-fitness-pro',
};

export const Layout = () => {
  const { pathname } = useLocation();

  return (
    <Styled.LayoutWrapper $homePage={ currentLocation.homePage === pathname.replace(/\//gi, '') }>
      <Header currentLocation={ pathname } />
      <Outlet />
    </Styled.LayoutWrapper>
  );
};
