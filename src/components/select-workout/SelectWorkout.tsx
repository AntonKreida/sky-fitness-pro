import { ReactComponent as IconStatusOk } from '@assets/icons/status-ok.svg';

import * as S from './SelectWorkout.styled';
import { WORKOUTS } from './lib/MockData';


export const SelectWorkout = () => (
  <S.Select>
    <S.SelectTitle>Выберите тренировку</S.SelectTitle>
    <S.SelectList>
      { WORKOUTS.map(({
        id, title, text, isCompleted
      }) => (
        <S.SelectItem key={ String(id) } $color={ isCompleted ? '#06b16e' : '#000' }>
          <S.SelectItemContent>
            <S.SelectItemContentTitle $color={ isCompleted ? '#06b16e' : '#000' }>
              { title }
              { isCompleted && <IconStatusOk /> }
            </S.SelectItemContentTitle>
            <S.SelectItemContentText $color={ isCompleted ? '#06b16e' : '#000' }>
              { text }
            </S.SelectItemContentText>
          </S.SelectItemContent>
        </S.SelectItem>
      )) }
    </S.SelectList>
  </S.Select>
);
