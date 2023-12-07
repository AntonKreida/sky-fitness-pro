import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { IWorkout } from '@/interface';

import { useGetAllWorkoutsQuery } from '../../redux/course-api/courses-api';
import { Button } from '../../shared/button/button';
import * as Styled from './styled.main-content';
import { MyProgress } from './ui/progress';


export const MainContent = () => {
  const { data = [] } = useGetAllWorkoutsQuery(20);
  // const { id } = useParams();
  const id = '17oz5f';

  const allWorkouts: IWorkout[] = [];
  if (data) {
    const keys = Object.keys(data);
    keys.forEach((key: any) => allWorkouts.push(data[key]));
  }

  const selectedWorkout = allWorkouts?.find((item) => item._id === id);
  console.log(selectedWorkout);
  // @ts-ignore later
  const selectedWorkoutId = allWorkouts.indexOf(selectedWorkout);

  const exercises = selectedWorkout?.exercises;
  const nameWorkout = selectedWorkout?.name;
  const youtubeLink = selectedWorkout?.video;
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen((prev) => !prev);
  };

  const getNumberOfWorkout = () => selectedWorkoutId + 1;

  return (
    <Styled.MainContentWrapper>

      <Styled.MainContentHeader>
        <Styled.MainContentTittle>
          Йога
        </Styled.MainContentTittle>
        <Styled.MainContentSubTittle>
          {nameWorkout}
        </Styled.MainContentSubTittle>

      </Styled.MainContentHeader>

      <Styled.MainContentVideoWrapper>
        <Styled.MainContentVideo
          allowFullScreen
          src={youtubeLink}
          title="YouTube video player"
        />
      </Styled.MainContentVideoWrapper>

      <Styled.MainContentWorkoutWrapper>

        <Styled.MainContentExercisesWrapper>
          <Styled.MainContentExerciseTitle>
            Упражнения
          </Styled.MainContentExerciseTitle>
          <Styled.MainContentExerciseList>
            {exercises?.map((item) => (
              <Styled.MainContentExerciseItem key={item.name}>{item.name}</Styled.MainContentExerciseItem>
            ))}
          </Styled.MainContentExerciseList>
          <Button text="Заполнить свой прогресс" type="button" onClick={openMenu} />

          {open
            ? (
              <MyProgress
                exercises={exercises}
                open={open}
                selectedWorkoutId={selectedWorkoutId}
                setOpen={setOpen}
              />
            )
            : null}

        </Styled.MainContentExercisesWrapper>

        <Styled.MainContentProgressWrapper>
          <Styled.MainContentProgressTitle>
            Мои прогресс по тренировке  {getNumberOfWorkout()}:
          </Styled.MainContentProgressTitle>

          <Styled.MainContentProgressBarsWrapper>
            <Styled.MainContentProgressBarItem>
              {exercises?.map((item, index) => (
                <Styled.MainContentProgressBarContainer key={item.name}>
                  <Styled.MainContentProgressBarName>
                    {item.workout}
                  </Styled.MainContentProgressBarName>
                  <Styled.MainContentProgressBarStrip>
                    <Styled.MainContentProgressBarValue />
                  </Styled.MainContentProgressBarStrip>
                </Styled.MainContentProgressBarContainer>
              ))}

            </Styled.MainContentProgressBarItem>
          </Styled.MainContentProgressBarsWrapper>

        </Styled.MainContentProgressWrapper>

      </Styled.MainContentWorkoutWrapper>

    </Styled.MainContentWrapper>
  );
};
