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
