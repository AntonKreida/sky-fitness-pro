import styled from 'styled-components';


export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;
export const ProfileTitle = styled.h2`
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 48px;
    font-weight: 400;
    line-height: 56px;
`;
export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
export const ProfileText = styled.span`
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
`;
export const ProfileButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`;
export const ProfileCourses = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
`;
export const ProfileCoursesList = styled.ul`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 40px;
`;
export const ProfileCourseItem = styled.li`
    position: relative;
    grid-column: span 4;
    height: 480px;
    border-radius: 30px;
    background: transparent;
    -webkit-backdrop-filter: blur(14.518652916px);
            backdrop-filter: blur(14.518652916px);
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ProfileCourseItemTitle = styled.h3`
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 36px;
    font-weight: 800;
    line-height: 110%;
    letter-spacing: -0.5px;
    position: absolute;
    top: 45px;
    left: 45px;
`;
export const ProfileCourseItemImg = styled.img`
    width: 100%;
    height: 100%;
`;
export const ProfileCourseItemButton = styled.div`
    position: absolute;
    bottom: 45px;
    left: 45px;
`;
