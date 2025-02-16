import Image from 'next/image';
import { ComponentProps } from 'react';

import { IngredientCategory } from '@/entities/ingredient/ingredient.type';
import { cn } from '@/shared/utils';

type IngredientCategoryCardProps = ComponentProps<'div'> & IngredientCategory;

function IngredientCategoryCard({
  className,
  imageSrc,
  icon,
  title,
  description,
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
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-md" />
        {!imageSrc && (
          <span className="absolute inset-0 flex items-center justify-center text-gray-500">
            Image
          </span>
        )}
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

export { IngredientCategoryCard };
