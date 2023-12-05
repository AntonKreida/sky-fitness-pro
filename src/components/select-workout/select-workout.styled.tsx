import styled from 'styled-components';


interface ISelectProps {
  $color: string;
}

export const Select = styled.div`
    width: 444px;
    height: 626px;
    padding: 53px 36px 38px;
    border-radius: 12px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`;
export const SelectTitle = styled.h3`
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
`;
export const SelectList = styled.ul`
    width: 307px;
    align-self: flex-end;
    padding-right: 24px;
    display: flex;
    flex-direction: column;
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