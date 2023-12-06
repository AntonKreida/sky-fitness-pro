import styled from 'styled-components';


export const CourseLogo = styled.div`
    position: absolute;
    top: 2rem;
    left: 5rem;
`;

export const CourseBtnEnterContainer = styled.div`
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

export const CourseContainer = styled.div`
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
`;

export const CourseImage = styled.img`
    object-fit: fill;
    width: 100%;
`;

export const CourseBanner = styled.div`
    position: relative;
    border-radius: 30px;
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255)`;

export const CourseTitle = styled.span`
    position: absolute;
    top: 35px;
    left: 30px;
    font-size: 4rem;
    line-height: normal;
`;

export const CourseText = styled.div`
    font-family: inherit;
    font-size: 2rem;
    margin-top: 75px;
    margin-bottom: 40px;
    `;

export const CourseAllPoints = styled.div`
    display: flex;
    width: fit-content;
    gap: 87px;
    `;

export const CoursePoint = styled.div`
    display: flex;
    gap: 24px;
    `;

export const CourseBullet = styled.div`
    border-radius: 34px;
    background: rgb(199, 233, 87);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 67px;
    height: 67px;
    font-size: 2rem`;

export const CoursePointText = styled.li`
    list-style-type: none;
    width: 244px;
    font-size: 1.5rem;
    `;

export const CourseDirection = styled.div`
column-count: 2
`;

export const CourseDirPoint = styled.li`
    font-size: 24px;
`;

export const CourseInfo = styled.div`
    margin-top: 75px;
    width: 1160px;
    font-size: 24px;
`;

export const CourseFooter = styled.div`
    position: relative;
    margin-top: 75px;
`;

export const CourseFooterText = styled.span`
    position: absolute;
    width: 823px;
    font-size: 2rem;
    line-height: 40px;
    top: 46px;
    left: 52px;
`;

export const CourseFooterBtn = styled.button`
    position: absolute;
    left: 3.25rem;
    bottom: 3rem;

    outline: none;
    border: none;
    border-radius: 5rem;
    padding: 12px 1rem 16px;
    min-width: 17rem;
    font-family: inherit;
    font-size: 1.25rem;
    color: rgb(255, 255, 255);
    background-color: rgb(88, 14, 162);
    cursor: pointer;
`;
