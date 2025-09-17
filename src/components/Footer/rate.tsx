import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Rating, RatingButton } from '@/components/ui/shadcn-io/rating';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import SharedButton from '../Shared/SharedButton';

export default function Rate() {
  return (
    <div className='bg-secondary py-6 sm:py-8 lg:py-11 px-4 sm:px-8 lg:px-40 relative overflow-hidden'>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12'>
        {/* left */}
        <div className='flex flex-col w-full lg:w-auto'>
          <h2 className='text-xl sm:text-2xl font-medium text-main mb-2 text-center lg:text-left'>
            Rate this content
          </h2>
          <div className='flex justify-center lg:justify-start mb-4'>
            <Rating defaultValue={3}>
              {Array.from({ length: 5 }).map((_, index) => (
                <RatingButton className='text-[#FF9619]' key={index} />
              ))}
            </Rating>
          </div>
          <Input
            placeholder=' Your Comment '
            className='w-full sm:w-[400px] h-[44px] border-[#D9D9D9] my-5 p-3'
          />
          <div className='flex justify-center lg:justify-start'>
            <SharedButton title='Submit' bgColor='bg-main' textColor='text-white' />
          </div>
        </div>

        {/* right */}
        <div className='w-full lg:w-auto'>
          <h2 className='text-xl sm:text-2xl font-medium text-main mb-6 text-center lg:text-left'>
            Did you find that helpful?
          </h2>
          <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4'>
            <Button
              variant='outline'
              className='text-[#EB5A3C] border-[#EB5A3C] px-4 py-2 w-full sm:w-auto'
            >
              <ThumbsUp size={20} />
              Useful
            </Button>
            <Button
              variant='outline'
              className='text-[#EB5A3C] border-[#EB5A3C] px-4 py-2 w-full sm:w-auto'
            >
              <ThumbsDown size={20} />
              Not useful
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
