import { HeartPulse } from 'lucide-react';
import Link from 'next/link';

import { Card, CardContent, CardHeader } from '@/shared/ui/card';
import { Container } from '@/shared/ui/container';
import { cn } from '@/shared/utils';

import { RECIPE_CATEGORIES } from './category-recipes-feed.config';

export function CategoryRecipesFeed() {
  return (
    <Container className="flex flex-col gap-y-8 py-12">
      <h2 className="text-2xl font-bold">카테고리별 레시피</h2>

      <ul className="grid grid-cols-3 gap-x-8 pb-3">
        {RECIPE_CATEGORIES.map(({ href, icon, text }) => (
          <li key={href}>
            <CategoryRecipeCard href={href} icon={icon} title={text} variant="muted" />
          </li>
        ))}
        <li>
          <CategoryRecipeCard
            href="#"
            icon={<HeartPulse className="h-8 w-8" aria-hidden />}
            title="건강 진단"
            caption="맞춤 설문으로 나만의 레시피를 찾아보세요"
          />
        </li>
      </ul>
    </Container>
  );
}

type CategoryRecipeCardProps = {
  icon: React.ReactNode;
  title: string;
  caption?: string;
  href: string;
  variant?: 'primary' | 'muted';
};

function CategoryRecipeCard({
  href,
  icon,
  title,
  caption,
  variant = 'primary',
}: CategoryRecipeCardProps) {
  return (
    <Link href={href} passHref>
      <Card
        className={cn(
          'flex h-full cursor-pointer flex-col items-center transition-transform hover:scale-105',
          {
            'bg-primary text-primary-foreground': variant === 'primary',
            'bg-muted text-primary': variant === 'muted',
          },
        )}
      >
        <CardHeader>{icon}</CardHeader>
        <CardContent className="flex flex-col items-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="text-xs">{caption}</span>
        </CardContent>
      </Card>
    </Link>
  );
}
