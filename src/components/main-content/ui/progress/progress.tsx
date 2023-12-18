import { FormEvent, useState } from 'react';

import { IExercise } from '@interface/';
import { useAppSelector } from '@hook/';
import { getStateUser, usePatchChangeWorkoutMutation } from '@redux/';

import { Popup } from '../pop-up';
import * as S from './progress.styled';


interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  exercises: IExercise[] | undefined;
  pageIdWorkout: string | undefined;
  patchChangeWorkout: any;
}

interface TResultForForm {
  name: string;
  quantity: number;
  workout: string;
  repeat: number;
}

export const MyProgress: React.FC<Props> = ({
  open, setOpen, exercises, pageIdWorkout, patchChangeWorkout,
}) => {
  const [okPopupOpen, setOkPopupOpen] = useState<boolean>(false);
  const [isEmptyField, setIsEmptyField] = useState<boolean>(false);

  const userName = useAppSelector(getStateUser);


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { currentTarget } = event;

    const formData = new FormData(currentTarget);
    const listFormData = formData.entries();
    const inputArr = [...listFormData];

    const newWorkoutData = inputArr.reduce<TResultForForm[]>((acc, workout) => {
      const currentExercise = exercises?.find((item) => item.workout === workout[0]);

      const result = {
        name: currentExercise?.name as string,
        quantity: Number(currentExercise?.quantity),
        workout: workout[0],
        repeat: Number(workout[1]),
      };

      acc.push(result);
      return acc;
    }, []);


    try {
      await patchChangeWorkout({
        idUser: userName?.id as string,
        idWorkout: pageIdWorkout as string,
        body: newWorkoutData,
      });
    } catch {
      throw new Error('Не удалось изменить тренировку');
    }

    // @ts-ignore later
    const inputValues = [...formData.values()];
    const isEmptyValues = inputValues.includes('');

    if (isEmptyValues) {
      setIsEmptyField(true);
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
