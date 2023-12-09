import styled from 'styled-components';


export const Button = styled.button`
    width: 275px;
    height: 52px;
    border-radius: 46px;
    background: rgb(88, 14, 162);
    color: rgb(255, 255, 255);
    font-variant-numeric: lining-nums proportional-nums;
    font-family: StratosLCWeb-Regular, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.05px;
    outline: none;
    border: none;
    cursor: pointer;

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

export const ButtonHeader = styled.button`
    border-radius: 46px;
    color: #FFF;
    font-size: 16px;
    background: #140D40;
    padding: 5px 16px;
    border: none;
`;
