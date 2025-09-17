'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface SuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SuccessDialog({ open, onOpenChange }: SuccessDialogProps) {
  const t = useTranslations('articleForm.success');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-lg '>
        <DialogHeader className='text-center'>
          <div className='flex justify-center mb-4'>
            <div className='flex h-16 w-16 items-center justify-center text-[#71908C] mb-5'>
              <CheckCircle className='h-8 w-8 ' />
            </div>
          </div>
          <DialogTitle className='text-xl text-center font-medium text-main'>
            {t('message')}
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
