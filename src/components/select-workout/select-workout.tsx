import { FC } from 'react';

// import { ReactComponent as IconStatusOk } from '@assets/icons/status-ok.svg';
import { useNavigate } from 'react-router-dom';

import { IWorkout } from '@/interface';

import { useGetAllWorkoutsQuery } from '../../redux/course-api/courses-api';
import * as S from './select-workout.styled';


interface ISelect {
  // @ts-ignore later
  setOpen: (prev) => void;
  selectedCourse: string[] | undefined;
}

export const SelectWorkout: FC<ISelect> = ({ setOpen, selectedCourse }) => {
  const navigate = useNavigate();
  const { data: usersWorkouts } = useGetAllWorkoutsQuery(20);

  const allWorkouts: IWorkout[] = [];

  if (usersWorkouts) {
    const keys = Object.keys(usersWorkouts);
    keys.forEach((key: any) => allWorkouts.push(usersWorkouts[key]));
  }

  const selectedWorkout = allWorkouts?.filter((i) => selectedCourse?.includes(i._id));

  const toggleClose = () => {
    setOpen((prev: boolean) => !prev);
  };

  return (
    <S.Select>
      <S.Progress>
        <S.SelectTitle>Выберите тренировку</S.SelectTitle>
        <S.closeBtn onClick={toggleClose}>
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

        <S.SelectList>
          {selectedWorkout.map(({ course, name, _id }) => (
            <S.SelectItem
              key={_id}
              $color="#000"
              onClick={() => navigate(`/sky-fitness-pro/workout/${_id}`)}
            >
              <S.SelectItemContent>
                <S.SelectItemContentTitle $color="#000">
                  {name}
                  { /* {isCompleted && <IconStatusOk />} */}
                </S.SelectItemContentTitle>
                <S.SelectItemContentText $color="#000">
                  {course}
                </S.SelectItemContentText>
              </S.SelectItemContent>
            </S.SelectItem>

            //   <S.SelectItem key={String(id)} $color={isCompleted ? '#06b16e' : '#000'}>
            //   <S.SelectItemContent>
            //     <S.SelectItemContentTitle $color={isCompleted ? '#06b16e' : '#000'}>
            //       {title}
            //       { /* {isCompleted && <IconStatusOk />} */}
            //     </S.SelectItemContentTitle>
            //     <S.SelectItemContentText $color={isCompleted ? '#06b16e' : '#000'}>
            //       {text}
            //     </S.SelectItemContentText>
            //   </S.SelectItemContent>
            // </S.SelectItem>
          ))}
        </S.SelectList>

      </S.Progress>
    </S.Select>
  );
};
