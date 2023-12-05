import styled from 'styled-components';


export const MainContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 40px;
`;

export const MainContentHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export const MainContentTittle = styled.h1`
    color: #000;
    font-size: 48px;
`;

export const MainContentSubTittle = styled.h2`
    color: #000;
    font-size: 32px;
`;

export const MainContentVideoWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 40px;
`;

export const MainContentVideo = styled.iframe`
    width: 100%;
    height: 639px;
    object-fit: contain;
`;

export const MainContentWorkoutWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 75px;
`;

export const MainContentExercisesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: space-between;
`;

export const MainContentExerciseTitle = styled.h1`
    color: #000;
    font-size: 32px;
`;

export const MainContentExerciseList = styled.ul`
   color: #000;
   font-size: 24px;
   list-style-type: disc;
   list-style-position: inside;
`;

export const MainContentExerciseItem = styled.li``;

export const MainContentProgressWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    height: 100%;
    width: fit-content;
    padding: 36px 55px;
    border-radius: 30px;
    background: #F2F2F2;
`;

export const MainContentProgressTitle = styled.div`
    color: #000;
    font-size: 32px;
    text-align: center;
`;

export const MainContentProgressBarsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const MainContentProgressBarItem = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 72px;
    align-items: center;
`;

export const MainContentProgressBarName = styled.div`
    color: #000;
    font-size: 24px;
`;

export const MainContentProgressBarStrip = styled.div`
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 36px;
    border-radius: 22px;
    border: 2px solid #565EEF;
    background: #EDECFF;
    overflow: hidden;
`;

export const MainContentProgressBarValue = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 50%;
    background: #565EEF;
`;
