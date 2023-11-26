import React from 'react';

import { ReactComponent as LogoWhite } from '@assets/images/logoWhite.svg';
import { ReactComponent as SaleSticker } from '@assets/images/saleSticker.svg';

import { CardsData } from './cardsData';
import * as S from './HomePage.styled';


export const HomePage = () => {
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
      <S.CardsContainer>
        { CardsData.map((card) => (
          <S.CardContainer key={ card._id } onClick={ Card }>
            <S.CardImage src={ card.path } />
            <S.CardTitle>{ card.title }</S.CardTitle>
          </S.CardContainer>
        )) }
      </S.CardsContainer>
      <S.Anchor onClick={ scrollToTop }>Наверх <span>↑</span> </S.Anchor>
    </S.HomePage>
  );
};
