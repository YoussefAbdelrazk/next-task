import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Image from 'next/image';

export default function AiSection({ setIsAiOpen }: { setIsAiOpen: (isAiOpen: boolean) => void }) {
  return (
    <div className='bg-[#FBFBFB] mt-24'>
      <div className='max-w-[1312px] mx-auto px-16 py-6 flex flex-col md:flex-row  items-center gap-4.5'>
        <div className='flex items-center gap-2'>
          <Image src='/assets/Ai.svg' alt='ai' width={30} height={30} />
          <button className='text-2xl font-medium text-[#ED6B50] cursor-pointer' onClick={() => setIsAiOpen(false)}>AskAi</button>
        </div>

        <div className='relative w-full'>
          <Input placeholder='Title,Keywords,Type of Content' className='w-full pl-10 bg-white' />
          <Search
            size={16}
            className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
          />
        </div>
      </div>
    </div>
  );
}
