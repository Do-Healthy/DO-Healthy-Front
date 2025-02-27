import { Carrot, Utensils } from 'lucide-react';

export const RECIPE_CATEGORIES = [
  {
    href: '/ingredient-category',
    icon: <Carrot className="h-8 w-8" aria-hidden />,
    text: '재료별 레시피',
  },
  { href: '#', icon: <Utensils className="h-8 w-8" aria-hidden />, text: '식단별 레시피' },
];
