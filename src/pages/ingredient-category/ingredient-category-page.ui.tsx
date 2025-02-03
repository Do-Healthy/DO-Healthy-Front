import * as React from 'react';

import { categories } from '@/features/ingredient-category-card/ingredient-category.contract';
import { CategoryFeed } from '@/widgets/category-ingredient-feed/category-ingredient-feed.ui';

function CategoryPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-4 text-2xl font-bold">재료 카테고리</h1>
      <p className="mb-6 text-gray-600">원하시는 재료 카테고리를 선택해주세요</p>

      <CategoryFeed categories={categories} />
    </div>
  );
}

export default CategoryPage;
