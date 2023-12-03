import styled from 'styled-components';


export const Wrapper = styled.div`
    width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const CourseLogo = styled.div`
    position: absolute;
    top: 2rem;
    left: 5rem;
`;

export const CourseBtnEnterConteiner = styled.div`
    position: absolute;
    top: 2rem;
    right: 5rem;
    width: 12rem;
    height: 3rem;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    z-index: 99;
`;
export const CourseBtnEnter = styled.button`
    outline: none;
    border: none;
    border-radius: 5rem;
    padding: 5px 1rem 9px;
    min-width: auto;
    font-family: inherit;
    font-size: 1.25rem;
    color: rgb(255, 255, 255);
    background-color: rgb(20, 13, 64);
    cursor: pointer;
`;
