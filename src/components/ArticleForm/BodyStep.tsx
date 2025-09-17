'use client';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArticleFormData } from '@/lib/schemes/article-schema';
import { Plus, Trash2, Upload } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useFieldArray, useFormContext } from 'react-hook-form';

export function BodyStep() {
  const { control, watch } = useFormContext<ArticleFormData>();
  const t = useTranslations('articleForm');

  const {
    fields: attachmentFields,
    append: appendAttachment,
    remove: removeAttachment,
  } = useFieldArray({
    control,
    name: 'body.attachments',
  });

  const title = watch('body.title') || '';
  const paragraph = watch('body.paragraph') || '';

  return (
    <div className='space-y-6 lg:space-y-8'>
      <div>
        <h2 className='text-xl sm:text-2xl font-bold text-gray-900 dark:text-white'>
          {t('steps.body.title')}
        </h2>
      </div>

      {/* Title */}
      <FormField
        control={control}
        name='body.title'
        render={({ field }) => (
          <FormItem>
            <div className='flex items-center justify-between'>
              <FormLabel className='text-base text-main font-bold'>
                {t('labels.title')} <span className='text-red-500'>*</span>
              </FormLabel>
              <span className='text-sm text-gray-500'>{title.length}/100</span>
            </div>
            <FormControl>
              <Input
                placeholder={t('placeholders.enterTitle')}
                {...field}
                className='border-2 border-[#D9D9D9] placeholder:text-[#767676] h-[47px]'
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Paragraph */}
      <FormField
        control={control}
        name='body.paragraph'
        render={({ field }) => (
          <FormItem>
            <div className='flex items-center justify-between'>
              <FormLabel className='text-base text-main font-bold'>
                {t('labels.paragraph')} <span className='text-red-500'>*</span>
              </FormLabel>
              <span className='text-sm text-gray-500'>{paragraph.length}/1000</span>
            </div>
            <FormControl>
              <Textarea
                placeholder={t('placeholders.enterParagraph')}
                className='min-h-[200px] border-2 border-[#D9D9D9] placeholder:text-[#767676]'
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <button type='button' className='button-append'>
        <Plus className='h-4 w-4 mr-2' />
        {t('buttons.addMore')}
      </button>

      {/* Attachments */}
      <div className='space-y-4'>
        <div>
          <h3 className='text-base font-bold text-main'>{t('labels.attachments')}</h3>
          <p className='text-sm text-gray-500'>{t('labels.maxImages')}</p>
        </div>

        {attachmentFields.map((field, index) => (
          <div key={field.id} className='space-y-4 px-4 py-10 border rounded-lg'>
            <div className='relative'>
              <div className='border-2 border-dashed border-gray-300 rounded-lg p-8 text-center'>
                <div className='flex flex-col items-center space-y-2'>
                  <Upload className='h-8 w-8 text-gray-400' />
                  <p className='text-sm text-gray-600'>{t('labels.uploadImage')}</p>
                  <p className='text-xs text-gray-500'>{t('labels.fileTypes')}</p>
                </div>
                {attachmentFields.length > 1 && (
                  <button
                    type='button'
                    onClick={() => removeAttachment(index)}
                    className=' absolute -top-8 right-1 transition-colors border-2 border-[#B41932] text-[#B41932] rounded p-1  '
                  >
                    <Trash2 className='h-3 w-3 ' />
                  </button>
                )}
              </div>
            </div>

            <FormField
              control={control}
              name={`body.attachments.${index}.description`}
              render={({ field }) => (
                <FormItem>
                  <div className='flex items-center justify-between'>
                    <FormLabel className='text-base text-main font-bold'>
                      {t('labels.description')}
                    </FormLabel>
                    <span className='text-sm text-gray-500'>{field.value?.length || 0}/500</span>
                  </div>
                  <FormControl>
                    <Textarea
                      placeholder={t('placeholders.enterDescription')}
                      className='min-h-[100px] border-2 border-[#D9D9D9] placeholder:text-[#767676]'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ))}

        {attachmentFields.length < 5 && (
          <button
            type='button'
            onClick={() => appendAttachment({ description: '' })}
            className='button-append'
          >
            <Plus className='h-4 w-4 mr-2' />
            {t('buttons.addAttachment')}
          </button>
        )}
      </div>
    </div>
  );
}
