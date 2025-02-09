import * as React from 'react';

import { cn } from '@/shared/utils';

interface DietCategoryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  categoryIcon?: React.ReactNode;
  categoryTitle: string;
  categoryDescription: string;
}

function DietCategoryCard({
  className,
  categoryIcon,
  categoryTitle,
  categoryDescription,
  ...props
}: DietCategoryCardProps) {
  return (
    <div
      data-testid="diet-category-card"
      className={cn(
        'flex flex-col rounded-lg bg-[#F9FAFB]',
        'h-[108px] w-[326px]',
        'p-6',
        'relative',
        className,
      )}
      {...props}
    >
      <div className="flex flex-wrap content-start items-start gap-x-2.5 gap-y-0">
        {categoryIcon && <span className="flex-shrink-0 text-base sm:text-lg">{categoryIcon}</span>}
        <span className="text-sm font-semibold sm:text-base">{categoryTitle}</span>
        <p className="mt-1 w-full text-xs text-gray-600 sm:text-sm">{categoryDescription}</p>
      </div>
    </div>
  );
}

export { DietCategoryCard };
