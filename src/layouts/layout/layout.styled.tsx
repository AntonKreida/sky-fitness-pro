import styled from 'styled-components';


export const LayoutWrapper = styled.div<{$homePage: boolean}>`
    display: flex;
    flex-direction: column;
    gap: 35px;
    width: 100%;
    height: fit-content;
    min-height: 100vh;
    padding: 35px 140px 60px 140px;
    background: ${({ $homePage }) => ($homePage ? 'rgba(39, 26, 88, 1)' : 'rgb(255, 255, 255)')};
`;
