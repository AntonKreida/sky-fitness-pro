import { ReactComponent as LogoWhite } from '@assets/images/logoWhite.svg';
import { ReactComponent as SaleSticker } from '@assets/images/saleSticker.svg';
import cardAerobic from '@assets/images/card-aerobics.png';
import cardBodyflex from '@assets/images/card-bodyflex.png';
import cardDancingFit from '@assets/images/card-dancingfit.png';
import cardStretching from '@assets/images/card-stretching.png';
import cardYoga from '@assets/images/card-yoga.png';

import * as S from './HomePage.styled';
import { CardsData } from './cardsData';
import { useGetAllCoursesQuery } from '../../store/course-api/coursesApi';


export const HomePage = () => {
  const { data, isLoading } = useGetAllCoursesQuery(5);

  const allCourses: any[] = [];
  if (data) {
    const keys = Object.keys(data);
    keys.forEach((key: any) => allCourses.push(data[key]));
  }

  const handleImg = (card: string) => {
    switch (card) {
      case 'kfpq8e':
        return cardStretching;
      case 'q02a6i':
        return cardBodyflex;
      case 'ab1c3f':
        return cardYoga;
      case 'ypox9r':
        return cardDancingFit;
      case '6i67sm':
        return cardAerobic;
      default:
        return null;
    }
  };


  const scrollToTop = () => {
    const header = document.getElementById('header');
    if (header) {
      header.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const Card = () => {
    alert('hi');
  };

  return (
    <S.HomePage>
      <S.HeaderContainer id="header">
        <S.LogoContainer>
          <LogoWhite />
        </S.LogoContainer>
        <S.LoginButton> Войти </S.LoginButton>
      </S.HeaderContainer>
      <S.DescriptionContainer>
        <S.DescriptionText>
          <S.Paragraph>Онлайн-тренировки для занятий дома</S.Paragraph>
          <S.Title> Начните заниматься спортом и улучшите качество жизни</S.Title>
        </S.DescriptionText>
        <S.SaleStickerContainer>
          <SaleSticker />
          <S.SaleStickerTitle>Измени своё <br /> тело за полгода</S.SaleStickerTitle>
        </S.SaleStickerContainer>
      </S.DescriptionContainer>
      {isLoading
        ? <S.Paragraph>Loading...</S.Paragraph>
        : (
          <S.CardsContainer>
            {allCourses?.map((card) => (
              <S.CardContainer key={card._id} onClick={Card}>
                <S.CardImage alt="fitness" src={handleImg(card._id)} />
                <S.CardTitle>{card.nameRU}</S.CardTitle>
              </S.CardContainer>
            ))}
          </S.CardsContainer>
        )}

      <S.Anchor onClick={scrollToTop}>Наверх <span>↑</span> </S.Anchor>
    </S.HomePage>
  );
};
