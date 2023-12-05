import cardAerobic from '@assets/images/card-aerobics.png';
import cardBodyflex from '@assets/images/card-bodyflex.png';
import cardDancingFit from '@assets/images/card-dancingfit.png';
import cardStretching from '@assets/images/card-stretching.png';
import cardYoga from '@assets/images/card-yoga.png';


interface ICard {
  _id: number;
  path: string;
  title: string;
}

export const CardsData: ICard[] = [
  {
    _id: 1,
    path: cardYoga,
    title: 'Аэробика',
  },
  {
    _id: 2,
    path: cardStretching,
    title: 'Стретчинг',
  },
  {
    _id: 3,
    path: cardDancingFit,
    title: 'Танцевальный фитнес',
  },
  {
    _id: 4,
    path: cardAerobic,
    title: 'Степ-аэробика',
  },
  {
    _id: 5,
    path: cardBodyflex,
    title: 'Бодифлекс',
  },
];
