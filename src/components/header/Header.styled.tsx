import styled from 'styled-components';


export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const HeaderInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;
export const HeaderInfoAva = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #d9d9d9;
`;
export const HeaderInfoName = styled.p`
    color: #000;
    text-align: right;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: -0.1px;
`;
