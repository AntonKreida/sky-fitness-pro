import styled from 'styled-components';


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0px;
  top: 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  justify-content: center;
`;

export const ProgressPopup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 41px;
  background: #fff;
  width: 444px;
`;

export const ProgressPopupTitle = styled.h1`
  color: #000;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  width: 268px;
`;

export const ProgressPopupImg = styled.img`
  width: 245px;
  height: 226px;
  padding-top: 7px;
`;
