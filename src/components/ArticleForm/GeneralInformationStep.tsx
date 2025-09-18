'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import {
  articleCategoryOptions,
  ArticleFormData,
  disciplineOptions,
  regionOptions,
  typologyOptions,
} from '@/lib/schemes/article-schema';
import { Calendar, Plus, Trash2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useFieldArray, useFormContext } from 'react-hook-form';

export function GeneralInformationStep() {
  const { control, watch, setValue } = useFormContext<ArticleFormData>();
  const t = useTranslations('articleForm');

  const {
    fields: architectFields,
    append: appendArchitect,
    remove: removeArchitect,
  } = useFieldArray({
    control,
    name: 'generalInformation.architects',
  });

  const {
    fields: clientFields,
    append: appendClient,
    remove: removeClient,
  } = useFieldArray({
    control,
    name: 'generalInformation.clients',
  });

  const {
    fields: dateFields,
    append: appendDate,
    remove: removeDate,
  } = useFieldArray({
    control,
    name: 'generalInformation.dates',
  });

  const typology = watch('generalInformation.typology') || [];
  const discipline = watch('generalInformation.discipline') || [];

  const handleTypologyChange = (value: string, checked: boolean) => {
    if (checked) {
      setValue('generalInformation.typology', [...typology, value]);
    } else {
      setValue(
        'generalInformation.typology',
        typology.filter(item => item !== value),
      );
    }
  };

  const handleDisciplineChange = (value: string, checked: boolean) => {
    if (checked) {
      setValue('generalInformation.discipline', [...discipline, value]);
    } else {
      setValue(
        'generalInformation.discipline',
        discipline.filter(item => item !== value),
      );
    }
  };

  return (
    <div className='space-y-6 lg:space-y-8'>
      <div>
        <h2 className='text-xl sm:text-2xl font-bold text-gray-900 dark:text-white'>
          {t('steps.general.title')}
        </h2>
      </div>

      {/* Topic Name */}
      <FormField
        control={control}
        name='generalInformation.topicName'
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              {t('labels.topicName')} <span className='text-red-500'>*</span>
            </FormLabel>
            <FormControl className=''>
              <Input placeholder={t('placeholders.enterTopicName')} {...field} className='' />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Article Category */}
      <FormField
        control={control}
        name='generalInformation.articleCategory'
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              {t('labels.articleCategory')} <span className='text-red-500'>*</span>
            </FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className=' border-2 border-[#D9D9D9] placeholder:text-[#767676] h-[47px]'>
                  <SelectValue placeholder={t('placeholders.selectCategory')} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {articleCategoryOptions.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Typology */}
      <div className='space-y-3'>
        <FormLabel className='text-base font-bold text-main'>{t('labels.typology')}</FormLabel>
        <div className='flex flex-wrap gap-2 sm:gap-3.5'>
          {typologyOptions.map(option => (
            <div key={option} className='flex items-center gap-3.5 text-[#767676]'>
              <Checkbox
                id={`typology-${option}`}
                checked={typology.includes(option)}
                onCheckedChange={checked => handleTypologyChange(option, checked as boolean)}
              />
              <label
                htmlFor={`typology-${option}`}
                className='text-md font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer'
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Discipline */}
      <div className='space-y-3'>
        <FormLabel className='text-base font-bold text-main'>{t('labels.discipline')}</FormLabel>
        <div className='flex flex-wrap gap-2 sm:gap-3.5'>
          {disciplineOptions.map(option => (
            <div key={option} className='flex items-center gap-3.5 text-[#767676]'>
              <Checkbox
                id={`discipline-${option}`}
                checked={discipline.includes(option)}
                onCheckedChange={checked => handleDisciplineChange(option, checked as boolean)}
              />
              <label
                htmlFor={`discipline-${option}`}
                className='text-md font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer'
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Location */}
      <div className='space-y-4'>
        <h3 className='text-base font-bold text-main mb-4'>{t('labels.location')}</h3>

        <FormField
          control={control}
          name='generalInformation.region'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t('labels.region')} <span className='text-red-500'>*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className=' border-2 border-[#D9D9D9] placeholder:text-[#767676] h-[47px]'>
                    <SelectValue placeholder={t('placeholders.selectRegion')} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {regionOptions.map(region => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='space-y-3'>
          <h4 className='text-base font-bold text-main mb-4'>
            {t('labels.geographicLocation')}
          </h4>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3'>
            <FormField
              control={control}
              name='generalInformation.latitude'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t('labels.latitude')} <span className='text-red-500'>*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('placeholders.enterLatitude')}
                      {...field}
                      className=' border-2 border-[#D9D9D9] placeholder:text-[#767676] h-[47px]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name='generalInformation.longitude'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t('labels.longitude')} <span className='text-red-500'>*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('placeholders.enterLongitude')}
                      {...field}
                      className=' border-2 border-[#D9D9D9] placeholder:text-[#767676] h-[47px]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name='generalInformation.altitude'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t('labels.altitude')} <span className='text-red-500'>*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('placeholders.enterAltitude')}
                      {...field}
                      className=' border-2 border-[#D9D9D9] placeholder:text-[#767676] h-[47px]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name='generalInformation.accuracy'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t('labels.accuracy')} <span className='text-red-500'>*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('placeholders.enterAccuracy')}
                      {...field}
                      className=' border-2 border-[#D9D9D9] placeholder:text-[#767676] h-[47px]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>

      {/* Architect/Designer */}
      <div className='space-y-4'>
        <h3 className='text-base font-bold text-main mb-4'>{t('labels.architectDesigner')}</h3>
        {architectFields.map((field, index) => (
          <div key={field.id} className='relative'>
            <FormField
              control={control}
              name={`generalInformation.architects.${index}.fullname`}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className='relative'>
                      <Input
                        placeholder={t('placeholders.enterArchitectName')}
                        {...field}
                        className=' border-2 border-[#D9D9D9] placeholder:text-[#767676]'
                      />
                      {architectFields.length > 1 && (
                        <button
                          type='button'
                          onClick={() => removeArchitect(index)}
                          className='button-remove'
                        >
                          <Trash2 className='h-4 w-4' />
                        </button>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ))}
        <button
          type='button'
          onClick={() => appendArchitect({ fullname: '' })}
          className='button-append'
        >
          <Plus className='h-4 w-4 mr-2 ' />
          {t('buttons.addArchitect')}
        </button>
      </div>

      {/* Client/Owner */}
      <div className='space-y-4'>
        <h3 className='text-base font-bold text-main mb-4'>{t('labels.clientOwner')}</h3>
        {clientFields.map((field, index) => (
          <div key={field.id} className='relative'>
            <FormField
              control={control}
              name={`generalInformation.clients.${index}.fullname`}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className='relative'>
                      <Input
                        placeholder={t('placeholders.enterClientName')}
                        {...field}
                        className='pr-10 border-2 border-[#D9D9D9] placeholder:text-[#767676]'
                      />
                      {clientFields.length > 1 && (
                        <button
                          type='button'
                          onClick={() => removeClient(index)}
                          className='button-remove'
                        >
                          <Trash2 className='h-3 w-3 ' />
                        </button>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ))}
        <button
          type='button'
          onClick={() => appendClient({ fullname: '' })}
          className='button-append'
        >
          <Plus className='h-4 w-4 mr-2' />
          {t('buttons.addClient')}
        </button>
      </div>

      {/* Date */}
      <div className='space-y-4'>
        <h3 className='text-base font-bold text-main mb-4 '>{t('labels.date')}</h3>
        {dateFields.map((field, index) => (
          <div key={field.id} className='space-y-4 p-4 border rounded-lg'>
            <div className='relative'>
              <FormField
                control={control}
                name={`generalInformation.dates.${index}.typeOfDate`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('labels.typeOfDate')} *</FormLabel>
                    <FormControl>
                      <div className='relative'>
                        <Input
                          placeholder={t('placeholders.enterDateType')}
                          {...field}
                          className='pr-10 border-2 border-[#D9D9D9] placeholder:text-[#767676] h-[47px]'
                        />
                        {dateFields.length > 1 && (
                          <button
                            type='button'
                            onClick={() => removeDate(index)}
                            className='button-remove'
                          >
                            <Trash2 className='h-4 w-4' />
                          </button>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={control}
              name={`generalInformation.dates.${index}.dateType`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('labels.selectDateType')} *</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className='flex items-center space-x-20'
                    >
                      <div className=' flex flex-col  md:flex-row items-center space-x-2 md:w-[260px] text-[#767676]'>
                        <RadioGroupItem
                          className=' '
                          value='year-month-day'
                          id={`date-type-1-${index}`}
                        />
                        <label htmlFor={`date-type-1-${index}`}>{t('labels.yearMonthDay')}</label>
                      </div>
                      <div className='flex items-center space-x-2 w-[260px] text-[#767676]'>
                        <RadioGroupItem value='year-month' id={`date-type-2-${index}`} />
                        <label htmlFor={`date-type-2-${index}`}>{t('labels.yearMonth')}</label>
                      </div>
                      <div className='flex items-center space-x-2 w-[260px] text-[#767676]'>
                        <RadioGroupItem value='year' id={`date-type-3-${index}`} />
                        <label htmlFor={`date-type-3-${index}`}>{t('labels.year')}</label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name={`generalInformation.dates.${index}.date`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('labels.date')} *</FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <Input
                        placeholder={t('placeholders.enterDate')}
                        {...field}
                        className=' border-2 border-[#D9D9D9] placeholder:text-[#767676] h-[47px]'
                      />
                      <Calendar className='h-4 w-4 absolute right-6 top-1/2 transform -translate-y-1/2 text-[#767676]' />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ))}
        <button
          type='button'
          onClick={() => appendDate({ typeOfDate: '', dateType: 'year-month', date: '' })}
          className='button-append'
        >
          <Plus className='h-4 w-4 mr-2' />
          {t('buttons.addDate')}
        </button>
      </div>

      {/* Summary/Introduction */}
      <FormField
        control={control}
        name='generalInformation.summary'
        render={({ field }) => (
          <FormItem>
            <FormLabel className='text-base text-main font-bold'>{t('labels.summary')}</FormLabel>
            <FormControl>
              <Textarea
                placeholder={t('placeholders.enterSummary')}
                className='min-h-[120px]'
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
