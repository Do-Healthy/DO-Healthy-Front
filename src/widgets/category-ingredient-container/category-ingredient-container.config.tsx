//이후 각 카드 경로 설정 예정
import { IngredientCategory } from '@/entities/ingredient.type';

export const INGREDIENT_CATEGORIES: readonly IngredientCategory[] = [
  {
    icon: '🌱',
    title: '두부/콩류',

    imageSrc: 'https://picsum.photos/id/237/350/200',
    description: '두부, 렌틸콩, 병아리콩 등',
  },
  {
    icon: '🌱',
    title: '두부/콩류',
    imageSrc: 'https://picsum.photos/id/237/350/200',
    description: '두부, 렌틸콩, 병아리콩 등',
  },
  {
    icon: '🌱',
    title: '두부/콩류',
    imageSrc: 'https://picsum.photos/id/237/350/200',
    description: '두부, 렌틸콩, 병아리콩 등',
  },
  {
    icon: '🌱',
    title: '두부/콩류',
    imageSrc: 'https://picsum.photos/id/237/350/200',
    description: '두부, 렌틸콩, 병아리콩 등',
  },
] as const;
