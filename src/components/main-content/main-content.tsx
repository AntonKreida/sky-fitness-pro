import { useState } from 'react';

import { Button } from '../../shared/button/button';
import * as Styled from './styled.main-content';
import { SelectWorkout } from '../select-workout';


export const MainContent = () => {
  const [open, setOpen] = useState<boolean>(false);

  const openMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
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
            ? <SelectWorkout />
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
