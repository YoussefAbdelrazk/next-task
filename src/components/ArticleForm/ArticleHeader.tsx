'use client';

import { Button } from '@/components/ui/button';
import { BreadcrumbNav } from './BreadcrumbNav';

export function ArticleHeader() {
  return (
    <div className='bg-[#FBFBFB] border-b py-[150px] px-20 w-full'>
      <div className=' flex items-center justify-center'>
        {/* Breadcrumb and Cancel Button */}
        <div className='flex items-center justify-between w-full'>
          <BreadcrumbNav />
          <Button variant='outline' className='text-red-600 border-red-600 hover:bg-red-50  '>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
