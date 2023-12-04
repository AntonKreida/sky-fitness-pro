import { Outlet } from 'react-router-dom';

import * as Styled from './layout-auth.styled';


export const LayoutAuth = () => (
  <Styled.LayoutAuthWrapper>
    <Outlet />
  </Styled.LayoutAuthWrapper>
);
