import { ReactComponent as Ok } from '@assets/images/progress-ok.svg';

import * as S from './pop-up.styled';


export const ProgressPopup = () => (
  <S.ProgressPopup>
    <S.ProgressPopupTitle>Ваш прогресс засчитан!</S.ProgressPopupTitle>
    <Ok />
  </S.ProgressPopup>
);
