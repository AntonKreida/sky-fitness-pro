import { useNavigate } from 'react-router-dom';

import { Container } from '@layouts/';
import { ReactComponent as SaleSticker } from '@assets/images/sale-sticker.svg';
import cardBodyFlex from '@assets/images/card-body-flex.png';
import cardAerobic from '@assets/images/card-aerobics.png';
import cardDancingFit from '@assets/images/card-dancing-fit.png';
import cardStretching from '@assets/images/card-stretching.png';
import cardYoga from '@assets/images/card-yoga.png';
import { useGetAllCoursesQuery } from '@redux/';

import * as Styled from './home-page.styled';


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
      <Styled.DescriptionContainer>
        <Styled.DescriptionText>
          <Styled.Paragraph>Онлайн-тренировки для занятий дома</Styled.Paragraph>
          <Styled.Title> Начните заниматься спортом и улучшите качество жизни</Styled.Title>
        </Styled.DescriptionText>
        <Styled.SaleStickerContainer>
          <SaleSticker />
          <Styled.SaleStickerTitle>Измени своё <br /> тело за полгода</Styled.SaleStickerTitle>
        </Styled.SaleStickerContainer>
      </Styled.DescriptionContainer>
      {isLoading
        ? <Styled.Paragraph>Loading...</Styled.Paragraph>
        : (
          <Styled.CardsContainer>
            {allCourses?.map((card) => (
              <Styled.CardContainer
                key={card._id}
                onClick={() => {
                  navigate(`/sky-fitness-pro/${card._id}`);
                }}
              >
                <Styled.CardImage alt="fitness" src={handleImg(card.nameRU)} />
                <Styled.CardTitle>{card.nameRU}</Styled.CardTitle>
              </Styled.CardContainer>
            ))}
          </Styled.CardsContainer>
        )}

      <Styled.Anchor onClick={scrollToTop}>Наверх <span>↑</span> </Styled.Anchor>
    </Container>
  );
};
