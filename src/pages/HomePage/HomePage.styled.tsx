import styled from 'styled-components';


export const HomePage = styled.div`
  width: 100vw;
  background-color: #271a58;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  width: 1154px;
  padding: 30px 0 35px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
`;

export const DescriptionContainer = styled.div`
  width: 1154px;
  display: flex;
  justify-content: space-between;
`;

export const DescriptionText = styled.div`
  width: 830px;
`;

export const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #aaaaaa;
`;

export const Title = styled.h2`
  font-size: 60px;
  font-weight: 400;
  line-height: 54.9px;
  letter-spacing: -1.17px;
  color: rgba(244, 244, 255, 1);
  padding: 17px 0 52px 0;
`;

export const SaleStickerContainer = styled.div`
  position: relative;
  display: inline-block;
  align-self: flex-end;
  margin-right: -50px;
`;

export const SaleStickerTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.15px;
  color: rgba(255, 128, 113, 1);
  text-align: center;
  position: absolute;
  bottom: 45%;
  left: 0;
  right: 0;
  transform: rotate(15.96deg);
`;

export const LogoContainer = styled.div``;

export const LoginButton = styled.button`
  display: block;
  width: 77px;
  height: 36px;
  background-color: rgba(20, 13, 64, 1);
  border: none;
  border-radius: 46px;
  color: #fff;
  transition: all 0.3s;
  &:hover {
    background-color: rgba(45, 31, 121, 1);
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const CardContainer = styled.div`
    position: relative;
    cursor: pointer;
`;


export const CardImage = styled.img``;

export const CardTitle = styled.h1`
    font-size: 36px;
    font-weight: 800;
    line-height: 36.9px;
    letter-spacing: -0.5px;
    position: absolute;
    top: 55px;
    left: 55px;
`;

export const Anchor = styled.button`
  width: 147px;
  height: 48px;
  border: none;
  border-radius: 46px;
  background-color: rgba(199, 233, 87, 1);
  color: black;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.1px;
  text-align: center;
  margin: 34px 0 60px 0;
  transition: all 0.3s;
  &:hover {
    background-color: rgba(218, 242, 137, 1);
  }
`;
