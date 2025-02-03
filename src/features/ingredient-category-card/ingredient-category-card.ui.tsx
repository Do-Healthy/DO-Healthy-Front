import * as React from 'react';

import { cn } from '@/shared/utils';

interface CategoryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
}

function CategoryCard({
  className,
  imageSrc,
  icon,
  title,
  description,
  ...props
}: CategoryCardProps) {
  return (
    <div
      data-testid="category-card"
      className={cn(
        'flex flex-col rounded-lg border bg-[#F9FAFB] shadow',
        'aspect-[326/252] h-auto w-full max-w-[326px]',
        'p-4 sm:p-6',
        className,
      )}
      {...props}
    >
      {/* 이미지 영역 */}
      <div
        className="flex h-0 w-full items-center justify-center rounded-md bg-gray-200 bg-cover bg-center pb-[50%]"
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
      >
        {!imageSrc && <span className="text-gray-500">Image</span>}
      </div>

      {/* 텍스트 영역 */}
      <div className="mt-3 flex-grow sm:mt-5">
        <div className="flex flex-nowrap items-center gap-2">
          {icon && <span className="flex-shrink-0 text-base sm:text-lg">{icon}</span>}
          <span className="truncate text-sm font-semibold sm:text-base">{title}</span>
        </div>
        <p className="mt-1 hidden text-xs text-gray-600 sm:text-sm md:block">{description}</p>
      </div>
    </div>
  );
}

export { CategoryCard };
