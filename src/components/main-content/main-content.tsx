import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { IWorkout } from '@/interface';

import { useGetAllWorkoutsQuery } from '../../redux/course-api/courses-api';
import { Button } from '../../shared/button/button';
import * as Styled from './styled.main-content';
import { MyProgress } from './ui/progress';


export const MainContent = () => {
  const { data = [] } = useGetAllWorkoutsQuery(20);
  const { id } = useParams();

  const allWorkouts: IWorkout[] = [];
  if (data) {
    const keys = Object.keys(data);
    keys.forEach((key: any) => allWorkouts.push(data[key]));
  }
  console.log(allWorkouts);

  const selectedWorkout = allWorkouts?.find((item) => item._id === id);
  // @ts-ignore later
  const selectedWorkoutId = allWorkouts.indexOf(selectedWorkout);

  const workout = selectedWorkout?.exercises;
  const nameWorkout = selectedWorkout?.name;
  const youtubeLink = selectedWorkout?.video;
  const link = `https://www.youtube.com/embed/${youtubeLink}`;

  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Styled.MainContentWrapper>

      <Styled.MainContentHeader>
        <Styled.MainContentTittle>
          Йога
        </Styled.MainContentTittle>
        <Styled.MainContentSubTittle>
          Красота и здоровье / Йога на каждый день / 2 день
        </Styled.MainContentSubTittle>

      </Styled.MainContentHeader>

      <Styled.MainContentVideoWrapper>
        <Styled.MainContentVideo
          allowFullScreen
          src="https://www.youtube.com/embed/oqe98Dxivns?si=jv_3liM4UgBgPc1O"
          title="YouTube video player"
        />
      </Styled.MainContentVideoWrapper>

      <Styled.MainContentWorkoutWrapper>

        <Styled.MainContentExercisesWrapper>
          <Styled.MainContentExerciseTitle>
            Упражнения
          </Styled.MainContentExerciseTitle>
          <Styled.MainContentExerciseList>
            <Styled.MainContentExerciseItem>Первое упражнение</Styled.MainContentExerciseItem>
            <Styled.MainContentExerciseItem>Второе упражнение</Styled.MainContentExerciseItem>
            <Styled.MainContentExerciseItem>Третье упражнение</Styled.MainContentExerciseItem>
          </Styled.MainContentExerciseList>
          <Button text="Заполнить свой прогресс" type="button" onClick={openMenu} />

          {open
            ? (
              <MyProgress
                open={open}
                selectedWorkoutId={selectedWorkoutId}
                setOpen={setOpen}
                workout={workout}
              />
            )
            : null}

        </Styled.MainContentExercisesWrapper>

        <Styled.MainContentProgressWrapper>
          <Styled.MainContentProgressTitle>
            Мои прогресс по тренировке:
          </Styled.MainContentProgressTitle>

          <Styled.MainContentProgressBarsWrapper>
            <Styled.MainContentProgressBarItem>
              <Styled.MainContentProgressBarName>
                Наклонны:
              </Styled.MainContentProgressBarName>
              <Styled.MainContentProgressBarStrip>
                <Styled.MainContentProgressBarValue />
              </Styled.MainContentProgressBarStrip>
            </Styled.MainContentProgressBarItem>
          </Styled.MainContentProgressBarsWrapper>

        </Styled.MainContentProgressWrapper>

      </Styled.MainContentWorkoutWrapper>

    </Styled.MainContentWrapper>
  );
};
