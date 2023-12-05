import { useNavigate } from 'react-router-dom';

import { Container } from '@layouts/';
import { ReactComponent as SaleSticker } from '@assets/images/sale-sticker.svg';
import cardBodyFlex from '@assets/images/card-body-flex.png';
import cardAerobic from '@assets/images/card-aerobics.png';
import cardDancingFit from '@assets/images/card-dancing-fit.png';
import cardStretching from '@assets/images/card-stretching.png';
import cardYoga from '@assets/images/card-yoga.png';
import { useGetAllCoursesQuery } from '@redux/';

import * as S from './Home-page.styled';


export const HomePage = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllCoursesQuery(5);

  const allCourses: any[] = [];
  if (data) {
    const keys = Object.keys(data);
    keys.forEach((key: any) => allCourses.push(data[key]));
  }

  const handleImg = (card: string) => {
    switch (card) {
      case 'Стретчинг':
        return cardStretching;
      case 'Бодифлекс':
        return cardBodyFlex;
      case 'Йога':
        return cardYoga;
      case 'Танцевальный фитнес':
        return cardDancingFit;
      case 'Степ-аэробика':
        return cardAerobic;
      default:
        return null;
    }
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Container>
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
              <S.CardContainer
                key={card._id}
                onClick={() => {
                  navigate(`/sky-fitness-pro/${card._id}`);
                }}
              >
                <S.CardImage alt="fitness" src={handleImg(card.nameRU)} />
                <S.CardTitle>{card.nameRU}</S.CardTitle>
              </S.CardContainer>
            ))}
          </S.CardsContainer>
        )}

      <S.Anchor onClick={scrollToTop}>Наверх <span>↑</span> </S.Anchor>
    </Container>
  );
};
