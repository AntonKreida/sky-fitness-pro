import { useState } from 'react';

import { IExercise } from '@interface/';

import * as S from './progress.styled';
import { Popup } from '../pop-up';


const baseUrl = 'https://skypro-fitness-96004-default-rtdb.europe-west1.firebasedatabase.app';
interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  exercises: IExercise[] | undefined;
}

export const MyProgress: React.FC<Props> = ({
  open, setOpen, exercises
}) => {
  const [okPopupOpen, setOkPopupOpen] = useState<boolean>(false);
  const [isEmptyField, setIsEmptyField] = useState<boolean>(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const inputData = Object.fromEntries(formData);
    console.log(inputData);
    // @ts-ignore later
    const inputArr = [...formData.entries()];
    console.log(inputArr);

    // @ts-ignore later
    const inputValues = [...formData.values()];
    const isEmptyValues = inputValues.includes('');
    if (isEmptyValues) {
      setIsEmptyField(true);
      console.log('Fill all inputs');
      return;
    }


    setOkPopupOpen(true);

    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  return (
    <S.Container>
      <S.Progress>
        <S.closeBtn onClick={ () => setOpen(!open) }>
          <svg
            fill="#000000"
            height="20px"
            viewBox="0 0 25 25"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <title>cross</title>
              <desc>Created with Sketch Beta.</desc>
              <defs />
              <g
                fill="none"
                fillRule="evenodd"
                id="Page-1"
                stroke="none"
                strokeWidth="1"
              >
                <g
                  fill="#b1aaaa"
                  id="Icon-Set-Filled"
                  transform="translate(-469.000000, -1041.000000)"
                >
                  <path
                    d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48"
                    id="cross"
                  />
                </g>
              </g>
            </g>

          </svg>
        </S.closeBtn>
        { okPopupOpen ? (
          <Popup text="Ваш прогресс засчитан!" />
        ) : (
          <>
            <S.ProgressTitle>Мой прогресс</S.ProgressTitle>
            { exercises
              ? (
                <S.ProgressForm id="form" onSubmit={ handleSubmit }>
                  { exercises?.map((item) => (
                    <S.li key={ item.name }>
                      <S.ProgressText>
                        { `Сколько раз вы сделали упражнение ${item.workout} ?` }
                      </S.ProgressText>
                      <S.ProgressInput
                        name={ `${item.workout}` }
                        placeholder="Введите числовое значение"
                        type="number"
                      />
                    </S.li>
                  )) }
                  { isEmptyField && <S.LoginError>Заполните все поля</S.LoginError> }

                  <S.ProgressForButton>
                    <S.ProgressButton>
                      Отправить
                    </S.ProgressButton>
                  </S.ProgressForButton>
                </S.ProgressForm>
              )
              : (
                <S.nullExsecises>
                  Тренировок для выполнения не найдено.
                  <br />
                  Выполняйте упражнения из видео!
                </S.nullExsecises>
              ) }
          </>
        ) }
      </S.Progress>
    </S.Container>
  );
};
