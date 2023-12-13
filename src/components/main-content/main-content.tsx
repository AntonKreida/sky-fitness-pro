import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { IWorkout } from '@interface/';
import { getStateUser, useGetAllAddedWorkoutsQuery } from '@redux/';
import { useAppSelector } from '@hook/';
import { Button } from '@shared/';
import { calculatePercentage } from '@utils/';

import * as Styled from './styled.main-content';
import { MyProgress } from './ui/progress';


export const MainContent = () => {
  const params = useParams();
  const pageIdWorkout = params.id;
  const userName = useAppSelector(getStateUser);

  // @ts-ignore later
  const { data: userWorkouts } = useGetAllAddedWorkoutsQuery(userName.id);

  const allWorkouts: IWorkout[] = [];

  if (userWorkouts) {
    const keys = Object.keys(userWorkouts);
    keys.forEach((key: any) => allWorkouts.push(userWorkouts[key]));
  }

  const selectedWorkout = allWorkouts?.find((item) => item._id === pageIdWorkout);

  const exercises = selectedWorkout?.exercises;
  console.log(exercises);
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen((prev) => !prev);
  };

  const progressColors = [
    '#565eef',
    '#ff6d00',
    '#9a48f1',
    '#7cff31',
    '#31c8ff'

  ];

  return (
    <Styled.MainContentWrapper>

      <Styled.MainContentHeader>
        <Styled.MainContentTittle>
          { selectedWorkout?.course }
        </Styled.MainContentTittle>
        <Styled.MainContentSubTittle>
          { selectedWorkout?.name }
        </Styled.MainContentSubTittle>
      </Styled.MainContentHeader>
      <Styled.MainContentVideoWrapper>
        <Styled.MainContentVideo
          allowFullScreen
          src={ selectedWorkout?.video }
          title="YouTube video player"
        />
      </Styled.MainContentVideoWrapper>
      <Styled.MainContentWorkoutWrapper>
        <Styled.MainContentExercisesWrapper>
          <Styled.MainContentExerciseTitle>
            Упражнения
          </Styled.MainContentExerciseTitle>
          { exercises
            ? (
              <Styled.MainContentExerciseList>
                { exercises?.map((item) => (
                  <Styled.MainContentExerciseItem key={ item.name }>{ item.name }</Styled.MainContentExerciseItem>
                )) }
              </Styled.MainContentExerciseList>
            )
            : (
              <div>
                Тренировок для выполнения не найдено.
                <br />
                Выполняйте упражнения из видео!
              </div>
            ) }
          <Button text="Заполнить свой прогресс" type="button" onClick={ openMenu } />
          { open
            ? (
              <MyProgress
                exercises={ exercises }
                open={ open }
                pageIdWorkout={ pageIdWorkout }
                setOpen={ setOpen }
              />
            )
            : null }
        </Styled.MainContentExercisesWrapper>

        <Styled.MainContentProgressWrapper>
          <Styled.MainContentProgressTitle>
            Мои прогресс по тренировкам:
          </Styled.MainContentProgressTitle>

          <Styled.MainContentProgressBarsWrapper>
            <Styled.MainContentProgressBarItem>
              { exercises?.map((item, index) => (
                <Styled.MainContentProgressBarContainer key={ item.name }>
                  <Styled.MainContentProgressBarName>
                    { item.workout }
                  </Styled.MainContentProgressBarName>
                  <Styled.MainContentProgressBarStrip color={ progressColors[index] }>
                    <Styled.MainContentProgressBarFulled style={{
                      width: `${calculatePercentage(item.repeat, item.quantity)}%`,
                      background: progressColors[index]
                    }}
                    >
                      <Styled.MainTextPercent>
                        { calculatePercentage(
                          item.repeat,
                          item.quantity,
                        ) }
                        %
                      </Styled.MainTextPercent>
                    </Styled.MainContentProgressBarFulled>
                  </Styled.MainContentProgressBarStrip>
                </Styled.MainContentProgressBarContainer>
              )) }

            </Styled.MainContentProgressBarItem>
          </Styled.MainContentProgressBarsWrapper>
        </Styled.MainContentProgressWrapper>
      </Styled.MainContentWorkoutWrapper>
    </Styled.MainContentWrapper>
  );
};
