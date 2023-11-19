import styled, { css } from 'styled-components';


const mixinMiniContainer = css`
    width: 366px;
    min-height: 401px;
    margin-top: 100px;
    padding-top: 33px;
    border-radius: 12px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContainerAuth = styled.div`
    ${mixinMiniContainer}
    gap: 20px;
`;
export const ContainerChangeData = styled.div`
    ${mixinMiniContainer}
    gap: 10px;
`;
