import { Outlet } from 'react-router-dom';

import * as Styled from './styled.layout';


export const Layout = () => (
  <Styled.LayoutWrapper>
    <Outlet />
  </Styled.LayoutWrapper>
);
