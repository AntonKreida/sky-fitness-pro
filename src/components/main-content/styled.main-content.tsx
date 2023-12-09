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
    display: grid;
    grid-column: 8 / 17;
    background: rgb(242, 242, 242);
    border-radius: 30px;
    width: 638px;
    min-height: 336px;
    padding-bottom: 32px;
`;

export const MainContentProgressTitle = styled.div`
    color: rgb(0, 0, 0);
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
    margin-top: 36px;
`;

export const MainContentProgressBarsWrapper = styled.div`
    display: flex;
    gap: 30px;
`;

export const MainContentProgressBarItem = styled.div`
    padding-left: 44px;
    display: grid;
    justify-content: space-between;
    text-align: left;
    columns: 2;
    list-style: none;
`;

export const MainContentProgressBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
`;

export const MainContentProgressBarName = styled.div`
color: rgb(0, 0, 0);
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: -0.1px;
    margin: 0px;
    padding: 0px;
`;

export const MainContentProgressBarStrip = styled.div`
    width: 278px;
    height: 36px;
    border-radius: 22px;
    margin-right: 55px;
    border: 2px solid rgb(86, 94, 239);
    background: rgb(237, 236, 255);
    flex-shrink: 0;
    margin-left: 15px;
`;

export const MainContentProgressBarValue = styled.div`
    width: 0%;
    background-color: rgb(86, 94, 239);
    height: 100%;
    border-radius: 22px;
`;

export const MainTextPercent = styled.p`
  color: #fff !important;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.05px;
  margin: 0px;
  padding: 0px;
  text-align: right;
  padding-right: 10px;
  padding-left: 10px;
`;
