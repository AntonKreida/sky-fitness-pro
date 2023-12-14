import { RotatingLines } from 'react-loader-spinner';

import * as Styled from './loader-small.styled';


export const LoaderSmall = () => (
  <Styled.LoaderContainer>
    <RotatingLines
      visible
      animationDuration="0.75"
      strokeColor="grey"
      strokeWidth="5"
      width="96"
    />
  </Styled.LoaderContainer>
);
