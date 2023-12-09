import styled from 'styled-components';


export const profileHeader = styled.div`
  width: 100%;
  min-height: 95px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`;

export const svg = styled.svg`
  stroke: white;
`;

export const userEmail = styled.div`
  color: white;
`;

export const userEmailBlack = styled.div`
  color: black;
`;

export const userInfo = styled.div`
  position: relative;
  min-width: 170px;
  height: 50px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: white;
  text-align: right;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 24px;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.1px;
  z-index: 999;
  cursor:pointer;
  padding-bottom: 15px;
`;
export const userImg = styled.div`
  background-color: #d9d9d9;
  border-radius: 25px;
  height: 50px;
  width: 50px;
`;
export const userInfoPopUp = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  position: absolute;
  top: 2rem;
  right: 0rem;
  width: 100%;
  overflow: hidden;
  transition: height 0.3s ease-in-out 0s;
`;
export const popUpItem = styled.li`
  width: inherit;
  font-size: 1.5rem;
  line-height: 1.7;
  text-decoration: none;
  color: white;

  &:hover {
    color: rgb(208, 206, 206);
  }
  &:link {
    text-decoration: none;
  }
`;

export const popUpItemBlack = styled(popUpItem)`
  color: black;
`;

export const profileBtn = styled.button`
  width: 275px;
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

  &:active {
    background: rgb(39, 26, 88);
  }

  transition: all 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;
