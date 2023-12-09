import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { IWorkout } from '@/interface';

import { useGetAllWorkoutsQuery } from '../../redux/course-api/courses-api';
import { Button } from '../../shared/button/button';
import * as Styled from './styled.main-content';
import { MyProgress } from './ui/progress';


export const MainContent = () => {
  const params = useParams();
  const pageId = params.id;

  const { data = [] } = useGetAllWorkoutsQuery(20);

  const allWorkouts: IWorkout[] = [];
  if (data) {
    const keys = Object.keys(data);
    keys.forEach((key: any) => allWorkouts.push(data[key]));
  }

  const selectedWorkout = allWorkouts?.find((item) => item._id === pageId);

  // @ts-ignore later
  const selectedWorkoutId = allWorkouts.indexOf(selectedWorkout);

  const exercises = selectedWorkout?.exercises;
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen((prev) => !prev);
  };

  const getNumberOfWorkout = () => selectedWorkoutId + 1;

  return (
    <Styled.MainContentWrapper>

      <Styled.MainContentHeader>
        <Styled.MainContentTittle>
          {selectedWorkout?.course}
        </Styled.MainContentTittle>
        <Styled.MainContentSubTittle>
          {selectedWorkout?.name}
        </Styled.MainContentSubTittle>
      </Styled.MainContentHeader>
      <Styled.MainContentVideoWrapper>
        <Styled.MainContentVideo
          allowFullScreen
          src={selectedWorkout?.video}
          title="YouTube video player"
        />
      </Styled.MainContentVideoWrapper>
      <Styled.MainContentWorkoutWrapper>
        <Styled.MainContentExercisesWrapper>
          <Styled.MainContentExerciseTitle>
            Упражнения
          </Styled.MainContentExerciseTitle>
          {exercises
            ? (
              <Styled.MainContentExerciseList>
                {exercises?.map((item) => (
                  <Styled.MainContentExerciseItem key={item.name}>{item.name}</Styled.MainContentExerciseItem>
                ))}
              </Styled.MainContentExerciseList>
            )
            : (
              <div>
                Тренировок для выполнения не найдено.
                <br />
                Выполняйте упражнения из видео!
              </div>
            )}
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
              {exercises?.map((item) => (
                <Styled.MainContentProgressBarContainer key={item.name}>
                  <Styled.MainContentProgressBarName>
                    {item.workout}
                  </Styled.MainContentProgressBarName>
                  <Styled.MainContentProgressBarStrip>
                    <Styled.MainTextPercent>10%</Styled.MainTextPercent>
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
