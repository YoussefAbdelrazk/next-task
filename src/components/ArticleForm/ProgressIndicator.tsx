'use client';

import { FormStep } from '@/lib/schemes/article-schema';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface ProgressIndicatorProps {
  currentStep: FormStep;
  completedSteps: FormStep[];
}

export function ProgressIndicator({ currentStep, completedSteps }: ProgressIndicatorProps) {
  const t = useTranslations('articleForm');

  const steps = [
    {
      id: 'general' as FormStep,
      title: t('steps.general.title'),
      description: t('steps.general.description'),
    },
    {
      id: 'body' as FormStep,
      title: t('steps.body.title'),
      description: t('steps.body.description'),
    },
    {
      id: 'references' as FormStep,
      title: t('steps.references.title'),
      description: t('steps.references.description'),
    },
  ];
  return (
    <div className='w-64 space-y-4'>
      <div className='relative'>
        {/* Connecting line */}
        <div className='absolute left-3 top-6 w-0.5 h-32 bg-gray-300 dark:bg-gray-600'></div>

        <div className='space-y-8'>
          {steps.map((step, index) => {
            const isCompleted = completedSteps.includes(step.id);
            const isCurrent = currentStep === step.id;
            const stepNumber = index + 1;

            return (
              <div key={step.id} className='flex items-start space-x-4'>
                <div className='flex-shrink-0 relative z-10'>
                  {isCompleted ? (
                    <div className='flex h-6 w-6 items-center justify-center rounded-full bg-[#71908C]/70 border border-[#71908C]'>
                      <Check className='h-4 w-4 text-white' />
                    </div>
                  ) : (
                    <div
                      className={cn(
                        'flex h-6 w-6 items-center justify-center rounded-full text-sm font-medium',
                        isCurrent
                          ? ' bg-[#F8F2F5] text-[#7D305E] border border-[#7D305E] '
                          : 'bg-gray-200 text-gray-500 border border-gray-300',
                      )}
                    >
                      {stepNumber}
                    </div>
                  )}
                </div>
                <div className='min-w-0 flex-1 pt-1'>
                  <p
                    className={cn(
                      'text-sm font-bold',
                      isCurrent
                        ? 'text-[#7D305E]'
                        : isCompleted
                        ? 'text-[#71908C]'
                        : 'text-[#767676]',
                    )}
                  >
                    {step.title}
                  </p>
                  <p className='text-xs text-gray-400 dark:text-gray-500 mt-1'>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
