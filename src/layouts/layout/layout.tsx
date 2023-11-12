import { Outlet } from 'react-router-dom';

import { Header } from '@components/';

import * as Styled from './styled.layout';


export const Layout = () => (
  <Styled.LayoutWrapper>
    <Header />
    <Outlet />
  </Styled.LayoutWrapper>
);
