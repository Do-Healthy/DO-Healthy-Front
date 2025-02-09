import * as React from 'react';

import { DIET_CATEGORIES } from '@/widgets/category-diet-container/category-diet-container.config';
import { DietCategoryContainer } from '@/widgets/category-diet-container/category-diet-container.ui';

export function DietCategoryPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-4 text-2xl font-bold">식단 카테고리</h1>
      <p className="mb-6 text-gray-600">원하시는 식단 카테고리를 선택해주세요</p>

      <DietCategoryContainer dietCategories={DIET_CATEGORIES} />
    </div>
  );
}
