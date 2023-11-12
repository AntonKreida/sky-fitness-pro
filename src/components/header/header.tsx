import { Link } from 'react-router-dom';

import { Button } from '@shared/';

import * as Styled from './styled.header';


export const Header = () => (
  <Styled.HeaderWrapper>
    <Link to="/sky-fitness-pro">
      <Styled.HeaderLogo />
    </Link>
    <Button text="Войти" />
  </Styled.HeaderWrapper>
);
