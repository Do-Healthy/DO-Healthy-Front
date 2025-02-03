export interface Category {
  icon: string;
  title: string;
  size: string;
  imageSrc: string; // 이미지 경로
  description: string; // 설명
}

export const categories: Category[] = [
  {
    icon: '🌱',
    title: '두부/콩류',
    size: '두부, 렌틸콩, 병아리콩 등',
    imageSrc: 'https://picsum.photos/id/237/350/200',
    description: '두부, 렌틸콩, 병아리콩 등',
  },
  {
    icon: '🐟',
    title: '생선류',
    size: '고등어, 연어, 참치 등',
    imageSrc: 'https://picsum.photos/id/237/350/200',
    description: '고등어, 연어, 참치 등',
  },
  {
    icon: '🍌',
    title: '과일류',
    size: '바나나, 사과, 오렌지 등',
    imageSrc: 'https://picsum.photos/id/237/350/200',
    description: '바나나, 사과, 오렌지 등',
  },
  {
    icon: '🥦',
    title: '채소류',
    size: '당근, 브로콜리, 시금치 등',
    imageSrc: 'https://picsum.photos/id/237/350/200',
    description: '당근, 브로콜리, 시금치 등',
  },
  {
    icon: '🍖',
    title: '육류',
    size: '닭가슴살, 돼지고기, 소고기 등',
    imageSrc: 'https://picsum.photos/id/237/350/200',
    description: '닭가슴살, 돼지고기, 소고기 등',
  },
  {
    icon: '🥛',
    title: '식료/조미료',
    size: '발사믹식초, 허브, 올리브오일 등',
    imageSrc: 'https://picsum.photos/id/237/350/200',
    description: '발사믹식초, 허브, 올리브오일 등',
  },
  {
    icon: '🍞',
    title: '곡물/견과류',
    size: '귀리, 아몬드, 호두 등',
    imageSrc: 'https://picsum.photos/id/237/350/200',
    description: '귀리, 아몬드, 호두 등',
  },
  {
    icon: '🧂',
    title: '양념/향신료',
    size: '소금, 후추, 고춧가루 등',
    imageSrc: 'https://picsum.photos/id/237/350/200',
    description: '소금, 후추, 고춧가루 등',
  },
];
