import styled from 'styled-components';

import { ReactComponent as Logo } from '@assets/images/logoBlack.svg';


export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 30px 0;
`;

export const HeaderLogo = styled(Logo)``;
