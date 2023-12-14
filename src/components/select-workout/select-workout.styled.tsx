import styled from 'styled-components';


interface ISelectProps {
  $color: string;
}

export const Select = styled.div`
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
  padding: 44px;
`;

export const SelectTitle = styled.h3`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  text-align: center;
  margin-bottom: 40px;
`;

export const closeBtn = styled.div`
  position: absolute;
  z-index: 999;
  top: 10px;
  right: 10px;
  padding: 10px;
  cursor: pointer;
`;

export const SelectList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`;

export const SelectItem = styled.li<ISelectProps>`
    width: 278px;
    height: 76px;
    border-radius: 26px;
    border: 1px solid ${({ $color }) => $color};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
        opacity: 0.5;
    }
`;

export const SelectItemContent = styled.div`
    width: 223px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
`;

export const SelectItemContentTitle = styled.h4<ISelectProps>`
    color: ${({ $color }) => $color};
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 20px;
    font-weight: 400;
    line-height: 115%;
    letter-spacing: -0.05px;
    display: flex;
    align-items: center;
    gap: 11px;
`;

export const SelectItemContentText = styled.p<ISelectProps>`
    color: ${({ $color }) => $color};
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.016px;
`;
