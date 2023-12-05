import { Outlet } from 'react-router-dom';

import * as Styled from './Layout-auth.styled';


export const LayoutAuth = () => (
  <Styled.LayoutAuthWrapper>
    <Outlet />
  </Styled.LayoutAuthWrapper>
);
