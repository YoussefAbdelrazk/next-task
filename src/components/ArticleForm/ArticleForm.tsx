'use client';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import {
  ArticleFormData,
  articleSchema,
  bodySchema,
  FormStep,
  generalInformationSchema,
  referencesSchema,
} from '@/lib/schemes/article-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BodyStep } from './BodyStep';
import { GeneralInformationStep } from './GeneralInformationStep';
import { ProgressIndicator } from './ProgressIndicator';
import { ReferencesStep } from './ReferencesStep';
import { SuccessDialog } from './SuccessDialog';

export function ArticleForm() {
  const t = useTranslations('articleForm');
  const tCommon = useTranslations('common');

  const steps: { id: FormStep; title: string; schema: unknown }[] = [
    { id: 'general', title: t('steps.general.title'), schema: generalInformationSchema },
    { id: 'body', title: t('steps.body.title'), schema: bodySchema },
    { id: 'references', title: t('steps.references.title'), schema: referencesSchema },
  ];
  const [currentStep, setCurrentStep] = useState<FormStep>('general');
  const [completedSteps, setCompletedSteps] = useState<FormStep[]>([]);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const form = useForm<ArticleFormData>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      generalInformation: {
        topicName: '',
        articleCategory: '',
        typology: [],
        discipline: [],
        region: '',
        latitude: '',
        longitude: '',
        altitude: '',
        accuracy: '',
        architects: [{ fullname: '' }],
        clients: [{ fullname: '' }],
        dates: [{ typeOfDate: '', dateType: 'year-month', date: '' }],
        summary: '',
      },
      body: {
        title: '',
        paragraph: '',
        attachments: [{ file: undefined, description: '' }],
      },
      references: {
        tags: '',
        bibliography: [{ sourceDescription: '', linkReference: '' }],
        additionalAuthors: [{ name: '' }],
      },
    },
    mode: 'onChange',
  });

  const currentStepIndex = steps.findIndex(step => step.id === currentStep);

  // Check if current step has any data
  const isCurrentStepEmpty = () => {
    const formData = form.getValues();

    switch (currentStep) {
      case 'general':
        const general = formData.generalInformation;
        return (
          !general.topicName &&
          !general.articleCategory &&
          general.typology.length === 0 &&
          general.discipline.length === 0 &&
          !general.region &&
          !general.latitude &&
          !general.longitude &&
          !general.altitude &&
          !general.accuracy &&
          (!general.architects || general.architects.every(a => !a.fullname)) &&
          (!general.clients || general.clients.every(c => !c.fullname)) &&
          (!general.dates || general.dates.every(d => !d.typeOfDate || !d.date)) &&
          !general.summary
        );

      case 'body':
        const body = formData.body;
        return (
          !body.title &&
          !body.paragraph &&
          (!body.attachments || body.attachments.every(a => !a.description))
        );

      case 'references':
        const references = formData.references;
        return (
          !references.tags &&
          (!references.bibliography ||
            references.bibliography.every(b => !b.sourceDescription && !b.linkReference)) &&
          (!references.additionalAuthors || references.additionalAuthors.every(a => !a.name))
        );

      default:
        return true;
    }
  };

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      const nextStep = steps[currentStepIndex + 1].id;
      setCurrentStep(nextStep);
      setCompletedSteps(prev => [...prev, currentStep]);
    }
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      const prevStep = steps[currentStepIndex - 1].id;
      setCurrentStep(prevStep);
      setCompletedSteps(prev => prev.filter(step => step !== prevStep));
    }
  };

  const handleSaveDraft = () => {
    // Implement save draft functionality
    console.log('Saving draft:', form.getValues());
  };
  const handleDialog = () => {
    setShowSuccessDialog(!showSuccessDialog);
  };

  const handleSubmit = async (data: ArticleFormData) => {
    try {
      // Validate the complete form before submission
      const result = articleSchema.safeParse(data);

      if (!result.success) {
        // Set form errors for validation
        const errors = result.error.flatten().fieldErrors;
        Object.entries(errors).forEach(([field, messages]) => {
          if (messages && messages.length > 0) {
            form.setError(field as keyof ArticleFormData, {
              type: 'manual',
              message: messages[0],
            });
          }
        });
        return;
      }

      // Implement submit functionality
      console.log('Submitting article:', data);
      // Here you would typically send the data to your API

      // Show success dialog
      handleDialog();
    } catch (error) {
      console.error('Error submitting article:', error);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'general':
        return <GeneralInformationStep />;
      case 'body':
        return <BodyStep />;
      case 'references':
        return <ReferencesStep />;
      default:
        return <GeneralInformationStep />;
    }
  };

  return (
    <div
      className={`min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden transition-all duration-300 ${
        showSuccessDialog ? 'blur-lg' : ''
      }`}
    >
      <div className='max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-4 py-4 sm:py-8 w-full'>
        <div className='flex flex-col lg:flex-row gap-4 lg:gap-8'>
          {/* Left Sidebar - Progress Indicator */}
          <div className='w-full lg:w-64 flex-shrink-0 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-700 pb-4 lg:pb-0'>
            <div className='lg:sticky lg:top-8'>
              <ProgressIndicator currentStep={currentStep} completedSteps={completedSteps} />
            </div>
          </div>

          {/* Main Content */}
          <div className='flex-1'>
            <div className='bg-white dark:bg-gray-800 rounded-lg '>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-8'>
                  <div className='p-4 sm:p-6 lg:p-8'>{renderCurrentStep()}</div>

                  {/* Action Buttons */}
                  <div className='flex flex-col sm:flex-row justify-between gap-4 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-t border-gray-200 dark:border-gray-700 rounded-b-lg'>
                    <div className='flex space-x-4 order-2 sm:order-1'>
                      {currentStepIndex > 0 && (
                        <Button
                          type='button'
                          variant='outline'
                          onClick={handlePrevious}
                          className='border-2 border-main h-[43px] w-full sm:w-auto'
                        >
                          Previous
                        </Button>
                      )}
                    </div>

                    <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 order-1 sm:order-2'>
                      <Button
                        type='button'
                        variant='outline'
                        onClick={handleSaveDraft}
                        className='h-[43px] bg-[#91B9B4] text-white w-full sm:w-auto'
                      >
                        {tCommon('saveDraft')}
                      </Button>

                      {currentStepIndex < steps.length - 1 ? (
                        <Button
                          type='button'
                          onClick={handleNext}
                          disabled={isCurrentStepEmpty()}
                          className='h-[43px] bg-main text-white disabled:bg-gray-300 disabled:cursor-not-allowed w-full sm:w-auto'
                        >
                          {tCommon('next')}
                        </Button>
                      ) : (
                        <Button
                          type='button'
                          className='h-[43px] bg-main text-white w-full sm:w-auto'
                          onClick={() => handleDialog()}
                        >
                          {tCommon('submit')}
                        </Button>
                      )}
                    </div>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <SuccessDialog open={showSuccessDialog} onOpenChange={handleDialog} />
    </div>
  );
}
