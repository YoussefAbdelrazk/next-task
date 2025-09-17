'use client';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ArticleFormData } from '@/lib/schemes/article-schema';
import { Plus, Trash2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useFieldArray, useFormContext } from 'react-hook-form';

export function ReferencesStep() {
  const { control } = useFormContext<ArticleFormData>();
  const t = useTranslations('articleForm');

  const {
    fields: bibliographyFields,
    append: appendBibliography,
    remove: removeBibliography,
  } = useFieldArray({
    control,
    name: 'references.bibliography',
  });

  const {
    fields: authorFields,
    append: appendAuthor,
    remove: removeAuthor,
  } = useFieldArray({
    control,
    name: 'references.additionalAuthors',
  });

  return (
    <div className='space-y-6 lg:space-y-8'>
      <div>
        <h2 className='text-xl sm:text-2xl font-bold text-gray-900 dark:text-white'>
          {t('steps.references.title')}
        </h2>
      </div>

      {/* Tags */}
      <FormField
        control={control}
        name='references.tags'
        render={({ field }) => (
          <FormItem>
            <FormLabel className='text-base text-main font-bold'>{t('labels.tags')}</FormLabel>
            <FormControl>
              <Input
                placeholder={t('placeholders.enterTags')}
                {...field}
                className='border-2 border-[#D9D9D9] placeholder:text-[#767676] h-[47px]'
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Bibliography */}
      <div className='space-y-4'>
        <h3 className='text-base font-bold text-main'>{t('labels.bibliography')}</h3>

        {bibliographyFields.map((field, index) => (
          <div key={field.id} className='space-y-4 p-4 border rounded-lg'>
            <div className='flex items-center justify-between relative'>
              <h4 className='text-md font-medium'>
                {t('labels.bibliographyEntry')} {index + 1}
              </h4>
              {bibliographyFields.length > 1 && (
                <button
                  type='button'
                  onClick={() => removeBibliography(index)}
                  className=' absolute top-2 right-1 transition-colors border-2 border-[#B41932] text-[#B41932] rounded p-1  '
                >
                  <Trash2 className='h-3 w-3 ' />
                </button>
              )}
            </div>

            <FormField
              control={control}
              name={`references.bibliography.${index}.sourceDescription`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-base text-main font-bold'>
                    {t('labels.sourceDescription')}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('placeholders.enterSourceDescription')}
                      {...field}
                      className='border-2 border-[#D9D9D9] placeholder:text-[#767676] h-[47px]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name={`references.bibliography.${index}.linkReference`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-base text-main font-bold'>
                    {t('labels.linkReference')}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('placeholders.enterLinkReference')}
                      {...field}
                      className='border-2 border-[#D9D9D9] placeholder:text-[#767676] h-[47px]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ))}

        <button
          type='button'
          onClick={() => appendBibliography({ sourceDescription: '', linkReference: '' })}
          className='button-append'
        >
          <Plus className='h-4 w-4 mr-2' />
          {t('buttons.addBibliography')}
        </button>
      </div>

      {/* Additional Authors */}
      <div className='space-y-4'>
        <h3 className='text-base font-bold text-main'>{t('labels.additionalAuthors')}</h3>

        {authorFields.map((field, index) => (
          <div key={field.id} className='space-y-4 p-4 border rounded-lg '>
            <div className='flex items-center justify-between relative'>
              <h4 className='text-md font-medium'>
                {t('labels.author')} {index + 1}
              </h4>
              {authorFields.length > 1 && (
                <button
                  type='button'
                  onClick={() => removeAuthor(index)}
                  className=' absolute top-2 right-1 transition-colors border-2 border-[#B41932] text-[#B41932] rounded p-1  '
                >
                  <Trash2 className='h-3 w-3 ' />
                </button>
              )}
            </div>

            <FormField
              control={control}
              name={`references.additionalAuthors.${index}.name`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-base text-main font-bold'>
                    {t('labels.name')}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('placeholders.enterAuthorName')}
                      {...field}
                      className='border-2 border-[#D9D9D9] placeholder:text-[#767676] h-[47px]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ))}

        <button type='button' onClick={() => appendAuthor({ name: '' })} className='button-append'>
          <Plus className='h-4 w-4 mr-2' />
          {t('buttons.addAuthors')}
        </button>
      </div>
    </div>
  );
}
