import { ReactComponent as Ok } from '@assets/images/progress-ok.svg';

import * as S from './pop-up.styled';


interface IProps {
  text: string;
}

export const Popup: React.FC<IProps> = ({ text }) => (
  <S.Container>
    <S.ProgressPopup>
      <S.ProgressPopupTitle>{text}</S.ProgressPopupTitle>
      <Ok />
    </S.ProgressPopup>
  </S.Container>
);
