import { Input } from '@/components/ui/input';
import SharedButton from '../Shared/SharedButton';

export default function newsletter() {
  return (
    <div className='section-padding relative overflow-hidden'>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8'>
        {/* left */}
        <div className='text-center lg:text-left'>
          <p className='text-lg sm:text-xl lg:text-2xl font-medium text-[#7D305E] mb-2'>
            Subscribe to
          </p>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7D305E]'>
            Our newsletter
          </h2>
        </div>

        {/* right */}
        <div className='flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto'>
          <Input
            placeholder='Enter your email'
            className='w-full sm:w-[300px] lg:w-[400px] h-[44px]'
          />
          <SharedButton
            title='Subscribe'
            bgColor='bg-main'
            textColor='text-white'
            className='w-full sm:w-auto'
          />
        </div>
      </div>
    </div>
  );
}
