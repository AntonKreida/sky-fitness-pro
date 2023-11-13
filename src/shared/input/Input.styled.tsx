import styled from 'styled-components';


export const Input = styled.input`
    width: 279px;
    height: 34px;
    border: none;
    outline: none;
    border-bottom: 1px solid #d0cece;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.05px;

    &::placeholder {
        color: #d0cece;
    }
`;
