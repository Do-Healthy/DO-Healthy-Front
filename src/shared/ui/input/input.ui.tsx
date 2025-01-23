import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/shared/utils';

const inputVariants = cva(
  'flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
  {
    variants: {
      size: {
        default: 'h-9 px-3 py-1',
        sm: 'h-8 px-3 py-1 text-xs',
        lg: 'h-10 px-4 py-2',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

type InputProps = Omit<React.ComponentProps<'input'>, 'size'> &
  VariantProps<typeof inputVariants> & {
    leftSlot?: React.ReactNode;
    rightSlot?: React.ReactNode;
  };

function Input({ className, type, size, leftSlot, rightSlot, ...props }: InputProps) {
  return (
    <div className="relative flex items-center">
      {leftSlot && (
        <Slot className="pointer-events-none absolute left-3 flex items-center [&:where(button)]:pointer-events-auto">
          {leftSlot}
        </Slot>
      )}
      <input
        type={type}
        className={cn(
          inputVariants({ size }),
          leftSlot && 'pl-10',
          rightSlot && 'pr-10',
          className,
        )}
        {...props}
      />
      {rightSlot && (
        <Slot className="pointer-events-none absolute right-3 flex items-center [&:where(button)]:pointer-events-auto">
          {rightSlot}
        </Slot>
      )}
    </div>
  );
}

export { Input };
