import styled from 'styled-components';


export const Button = styled.button`
    width: 275px;
    height: 52px;
    border: none;
    border-radius: 46px;
    background: #580ea2;
    color: #fff;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    transition: all 0.5s;

    &:hover {
        background: #3f007d;
    }

    &:active {
        background: #271a58;
    }
`;
export const ButtonGo = styled.button`
    width: 120px;
    height: 42px;
    border: none;
    border-radius: 46px;
    background: #c7e957;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: -0.1px;
    transition: all;

    &:hover {
        background: #daf289;
    }

    &:active {
        background: #ebffab;
    }
`;
