import styled from 'styled-components';


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0px;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  justify-content: center;
`;

export const Progress = styled.div`
  width: 444px;
  background-color: #fff;
  position: absolute;
  border-radius: 12px;
  padding-left: 44px;
  padding-right: 43px;
`;

export const ProgressTitle = styled.h1`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  text-align: center;
  margin-top: 36px;
`;

export const ProgressForm = styled.form``;

export const ProgressText = styled.p`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05px;
  padding-top: 34px;
  padding-bottom: 22px;
`;

export const ProgressInput = styled.input`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05px;
  width: 361px;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #d0cece;
  outline: none;
  -moz-appearance: textfield;

  &::placeholder {
    background-color: transparent;
    color: #d0cece;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ProgressForButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProgressButton = styled.button`
  width: 278px;
  height: 52px;
  border-radius: 46px;
  background: rgb(88, 14, 162);
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: 'StratosLCWeb-Regular', sans-serif;
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
    background: rgb(39, 26, 88);
  }

  margin: 43px 0 44px 0;
`;

export const closeBtn = styled.div`
  position: absolute;
  z-index: 999;
  top: 10px;
  right: 10px;
  padding: 10px;
  cursor: pointer;
`;

export const li = styled.li`
  display: flex;
  flex-direction: column;
`;

export const nullExsecises = styled.div`
  padding: 20px 5px;
`;
