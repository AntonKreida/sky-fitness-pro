import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { IWorkout } from '@interface/';
import {
  getStateUser, useGetWorkoutByIdQuery, usePatchChangeWorkoutMutation
} from '@redux/';
import { useAppSelector } from '@hook/';
import { Button } from '@shared/';
import { calculatePercentage } from '@utils/';

import * as Styled from './styled.main-content';
import { MyProgress } from './ui/progress';
import { LoaderFull } from '../loader';


const progressColors = [
  '#565eef',
  '#ff6d00',
  '#9a48f1',
  '#7cff31',
  '#31c8ff'
];


export const MainContent = () => {
  const params = useParams();
  const pageIdWorkout = params.id;
  const userName = useAppSelector(getStateUser);
  const { data: workoutData, isLoading } = useGetWorkoutByIdQuery({
    userId: userName.id as string,
    workoutId: pageIdWorkout as string,
  });

  const [patchChangeWorkout] = usePatchChangeWorkoutMutation();

  const [currentWorkouts, setCurrentWorkouts] = useState<IWorkout| null>(null);
  const [open, setOpen] = useState(false);


  const openMenu = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (workoutData) {
      setCurrentWorkouts(workoutData);
    }
  }, [workoutData]);

  return (
    <>
      { isLoading
        ? <LoaderFull />
        : (
          <Styled.MainContentWrapper>

            <Styled.MainContentHeader>
              <Styled.MainContentTittle>
                { currentWorkouts?.course }
              </Styled.MainContentTittle>
              <Styled.MainContentSubTittle>
                { currentWorkouts?.name }
              </Styled.MainContentSubTittle>
            </Styled.MainContentHeader>
            <Styled.MainContentVideoWrapper>
              <Styled.MainContentVideo
                allowFullScreen
                src={ currentWorkouts?.video }
                title="YouTube video player"
              />
            </Styled.MainContentVideoWrapper>
            <Styled.MainContentWorkoutWrapper>
              <Styled.MainContentExercisesWrapper>
                <Styled.MainContentExerciseTitle>
                  Упражнения
                </Styled.MainContentExerciseTitle>
                { currentWorkouts?.exercises
                  ? (
                    <Styled.MainContentExerciseList>
                      { currentWorkouts.exercises.map((item) => (
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
                { open && (
                  <MyProgress
                    exercises={ currentWorkouts?.exercises }
                    open={ open }
                    pageIdWorkout={ pageIdWorkout }
                    patchChangeWorkout={ patchChangeWorkout }
                    setOpen={ setOpen }
                  />
                ) }
              </Styled.MainContentExercisesWrapper>

              <Styled.MainContentProgressWrapper>
                <Styled.MainContentProgressTitle>
                  Мои прогресс по тренировкам:
                </Styled.MainContentProgressTitle>

                <Styled.MainContentProgressBarsWrapper>
                  <Styled.MainContentProgressBarItem>
                    { currentWorkouts?.exercises && currentWorkouts.exercises.map((item, index) => (
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
        ) }
    </>
  );
};
