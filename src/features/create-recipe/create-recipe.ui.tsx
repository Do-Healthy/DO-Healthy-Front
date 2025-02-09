import { zodResolver } from '@hookform/resolvers/zod';
import { Plus, X } from 'lucide-react';
import { useFieldArray, useForm, useFormContext } from 'react-hook-form';

import { Button } from '@/shared/ui/button';
import { DropZoneWithPreview } from '@/shared/ui/drop-zone-with-preview';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { Textarea } from '@/shared/ui/textarea';

import { CreateRecipe, CreateRecipeSchema } from './create-recipe.contract';
import { submitRecipeForm } from './create-recipe.lib';

export function CreateRecipeForm() {
  const methods = useForm<CreateRecipe>({
    resolver: zodResolver(CreateRecipeSchema),
    defaultValues: {
      ingredients: [{ name: '', quantity: '' }],
      cookingSteps: [{ content: '', image: null }],
    },
  });

  const onSubmit = async (formData: CreateRecipe) => {
    try {
      const newFormData = await submitRecipeForm(formData);
      console.log('레시피 저장 완료:', newFormData);
    } catch (error) {
      console.error('레시피 저장 중 오류 발생:', error);
    }
  };

  return (
    <Form {...methods}>
      <form className="flex flex-col gap-y-4" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-1 flex-col gap-y-4">
            <FormField
              control={methods.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>레시피 제목</FormLabel>
                  <FormControl>
                    <Input size="lg" placeholder="레시피 제목을 입력하세요" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={methods.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>요리 소개</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-24 resize-none"
                      placeholder="요리에 대한 간단한 소개를 입력하세요"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={methods.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>태그</FormLabel>
                  <FormControl>
                    {/* TODO: 태그 인풋 추가 예정 */}
                    <Input size="lg" placeholder="태그를 입력하세요 (쉼표로 구분)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={methods.control}
            name="thumbnail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>대표 이미지</FormLabel>
                <FormControl>
                  <DropZoneWithPreview
                    className="aspect-square md:w-64"
                    value={field.value}
                    onValueChange={(value) => field.onChange(value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <fieldset className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <FormField
            control={methods.control}
            name="cookingTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>조리시간</FormLabel>
                <FormControl>
                  {/* TODO: TextField 추가 예정 */}
                  <Input
                    type="number"
                    min={0}
                    size="lg"
                    placeholder="30"
                    rightSlot={<span className="text-muted-foreground">분</span>}
                    {...field}
                    onChange={(event) => field.onChange(event.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="calories"
            render={({ field }) => (
              <FormItem>
                <FormLabel>칼로리</FormLabel>
                <FormControl>
                  {/* TODO: TextField 추가 예정 */}
                  <Input
                    type="number"
                    min={0}
                    size="lg"
                    placeholder="300"
                    rightSlot={<span className="text-muted-foreground">kcal</span>}
                    {...field}
                    onChange={(event) => field.onChange(event.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="servings"
            render={({ field }) => (
              <FormItem>
                <FormLabel>분량</FormLabel>
                <FormControl>
                  {/* TODO: TextField 추가 예정 */}
                  <Input
                    type="number"
                    min={0}
                    size="lg"
                    placeholder="2"
                    rightSlot={<span className="text-muted-foreground">인분</span>}
                    {...field}
                    onChange={(event) => field.onChange(event.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>

        <fieldset className="flex flex-col gap-y-4">
          <Label asChild>
            <legend className="mb-2">재료</legend>
          </Label>
          <IngredientList />
        </fieldset>

        <fieldset className="flex flex-col gap-y-4">
          <Label asChild>
            <legend className="mb-2">조리 순서</legend>
          </Label>
          <CookingStepList />
        </fieldset>

        <fieldset className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <legend className="mb-1 text-sm font-bold leading-none">영양 정보</legend>

          <FormField
            control={methods.control}
            name="carbohydrate"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>탄수화물</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    size="lg"
                    placeholder="0"
                    rightSlot={<span className="text-muted-foreground">g</span>}
                    {...field}
                    onChange={(event) => field.onChange(event.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="protein"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>단백질</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    size="lg"
                    placeholder="0"
                    rightSlot={<span className="text-muted-foreground">g</span>}
                    {...field}
                    onChange={(event) => field.onChange(event.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="fat"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>지방</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    size="lg"
                    placeholder="0"
                    rightSlot={<span className="text-muted-foreground">g</span>}
                    {...field}
                    onChange={(event) => field.onChange(event.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="sodium"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>나트륨</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    size="lg"
                    placeholder="0"
                    rightSlot={<span className="text-muted-foreground">mg</span>}
                    {...field}
                    onChange={(event) => field.onChange(event.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>

        {/* Footer */}
        <div className="flex justify-end gap-x-4">
          <Button type="button" size="lg" variant="outline">
            임시 저장
          </Button>
          <Button size="lg" type="submit">
            작성 완료
          </Button>
        </div>
      </form>
    </Form>
  );
}

/**
 * 레시피 재료 목록을 입력하는 컴포넌트입니다.
 * 재료명과 수량을 입력할 수 있으며, 재료를 추가/삭제할 수 있습니다.
 *
 * @todo
 * - 재료 간 순서 조정을 위한 드래그 앤 드롭 기능 추가
 */
function IngredientList() {
  const methods = useFormContext<CreateRecipe>();
  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: 'ingredients',
  });

  const handleAddIngredient = () => append({ name: '', quantity: '' });
  const handleRemoveIngredient = (step: number) => {
    remove(step);
    if (fields.length === 1) append({ name: '', quantity: '' });
  };

  return (
    <>
      <ul className="flex flex-col gap-y-4">
        {fields.map((field, index) => (
          <IngredientItem
            key={field.id}
            step={index}
            onRemove={() => handleRemoveIngredient(index)}
          />
        ))}
      </ul>
      <Button type="button" variant="ghost" onClick={handleAddIngredient}>
        <Plus aria-hidden />
        재료 추가
      </Button>
    </>
  );
}

type IngredientItemProps = {
  step: number;
  onRemove: () => void;
};

function IngredientItem({ step, onRemove }: IngredientItemProps) {
  const methods = useFormContext<CreateRecipe>();

  return (
    <div className="flex items-start gap-x-4">
      <div className="flex flex-1 items-start gap-x-4">
        <FormField
          control={methods.control}
          name={`ingredients.${step}.name`}
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input size="lg" placeholder="재료명" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={methods.control}
          name={`ingredients.${step}.quantity`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="w-32" size="lg" placeholder="수량" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="text-muted-foreground hover:text-accent-foreground"
        onClick={onRemove}
      >
        <span className="sr-only">삭제</span>
        <X aria-hidden />
      </Button>
    </div>
  );
}

/**
 * 레시피의 조리 순서를 입력하는 컴포넌트입니다.
 * 각 단계별로 조리 방법과 사진을 입력할 수 있으며, 단계를 추가/삭제할 수 있습니다.
 *
 * @todo
 * - 조리 순서 간 순서 조정을 위한 드래그 앤 드롭 기능 추가
 */
function CookingStepList() {
  const methods = useFormContext<CreateRecipe>();
  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: 'cookingSteps',
  });

  const handleAddStep = () => append({ content: '', image: null });
  const handleRemoveStep = (step: number) => {
    remove(step);
    if (fields.length === 1) append({ content: '', image: null });
  };

  return (
    <>
      <ul className="flex flex-col gap-y-4">
        {fields.map((field, index) => (
          <CookingStepItem key={field.id} step={index} onRemove={() => handleRemoveStep(index)} />
        ))}
      </ul>
      <Button type="button" variant="ghost" onClick={handleAddStep}>
        <Plus aria-hidden />
        순서 추가
      </Button>
    </>
  );
}

type CookingStepItemProps = {
  step: number;
  onRemove: () => void;
};

function CookingStepItem({ step, onRemove }: CookingStepItemProps) {
  const methods = useFormContext<CreateRecipe>();

  return (
    <div className="flex items-start gap-x-4">
      <div className="flex h-6 w-6 select-none items-center justify-center rounded-full bg-primary text-primary-foreground">
        {step + 1}
      </div>

      <fieldset className="flex flex-1 flex-col gap-2 md:flex-row">
        <FormField
          control={methods.control}
          name={`cookingSteps.${step}.image`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <DropZoneWithPreview
                  className="aspect-square md:w-60"
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={methods.control}
          name={`cookingSteps.${step}.content`}
          render={({ field }) => (
            <FormItem className="flex flex-1 flex-col">
              <FormControl>
                <Textarea
                  placeholder="조리법을 입력하세요"
                  className="min-h-24 flex-1 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </fieldset>

      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="text-muted-foreground hover:text-accent-foreground"
        onClick={onRemove}
      >
        <span className="sr-only">삭제</span>
        <X aria-hidden />
      </Button>
    </div>
  );
}
