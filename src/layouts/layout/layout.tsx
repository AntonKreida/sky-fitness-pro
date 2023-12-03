import { Outlet } from 'react-router-dom';

import { Header } from '@components/';

import * as Styled from './layout.styled';


export const Layout = () => (
  <Styled.LayoutWrapper>
    <Header />
    <Outlet />
  </Styled.LayoutWrapper>
);
