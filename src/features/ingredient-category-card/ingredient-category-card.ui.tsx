import Image from 'next/image';
import * as React from 'react';

import { cn } from '@/shared/utils';

interface IngredientCategoryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  ingredientImageSrc: string;
  ingredientIcon?: React.ReactNode;
  ingredientTitle: string;
  ingredientDescription: string;
}

function IngredientCategoryCard({
  className,
  ingredientImageSrc,
  ingredientIcon,
  ingredientTitle,
  ingredientDescription,
  ...props
}: IngredientCategoryCardProps) {
  return (
    <div
      data-testid="ingredient-category-card"
      className={cn(
        'flex flex-col rounded-lg border bg-[#F9FAFB] shadow',
        'aspect-[326/252] h-auto w-full max-w-[326px]',
        'p-4 sm:p-6',
        className,
      )}
      {...props}
    >
      {/* 이미지 영역 */}
      <div className="relative h-0 w-full overflow-hidden rounded-md pb-[50%]">
        <Image
          src={ingredientImageSrc}
          alt={ingredientTitle}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
        {!ingredientImageSrc && (
          <span className="absolute inset-0 flex items-center justify-center text-gray-500">
            Image
          </span>
        )}
      </div>

      {/* 텍스트 영역 */}
      <div className="mt-3 flex-grow sm:mt-5">
        <div className="flex flex-nowrap items-center gap-2">
          {ingredientIcon && (
            <span className="flex-shrink-0 text-base sm:text-lg">{ingredientIcon}</span>
          )}
          <span className="truncate text-sm font-semibold sm:text-base">{ingredientTitle}</span>
        </div>
        <p className="mt-1 hidden text-xs text-gray-600 sm:text-sm md:block">
          {ingredientDescription}
        </p>
      </div>
    </div>
  );
}

export { IngredientCategoryCard };
