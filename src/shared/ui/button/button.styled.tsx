import styled from 'styled-components';


export const ButtonWrapper = styled.button`
    border-radius: 46px;
    padding: 7px 16px;
    text-align: center;
    background: #140D40;
    outline: none;
    border: none;
    font-size: 16px;
    color: #ffffff;
    transition: background 0.1s linear;

    &:hover {
        background: #2D1F79;
    }

    &:active {
        background: #3B29A1;
    }
`;
