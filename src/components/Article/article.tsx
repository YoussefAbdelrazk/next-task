import { Button } from '@/components/ui/button';
import { MessageSquareDot, ThumbsUpIcon } from 'lucide-react';
import Image from 'next/image';

export default function article() {
  return (
    <div className='bg-secondary section-padding relative overflow-hidden  '>
      {/* Mask */}
      <div className='absolute top-0 right-0'>
        <Image src='/assets/Mask.png' alt='article' width={500} height={100} className='object-cover' />
      </div>
      <div className='section-container grid grid-cols-1 md:grid-cols-2 place-items-center  gap-4 py-12 md:py-0'>
        {/* Article Image */}
        <div className=' '>
          <Image
            src='/assets/article.png'
            alt='article1'
            width={500}
            height={500}

            className='object-cover rounded h-[400px] w-[500px] '
          />
        </div>

        {/* Article Content */}
        <div className='flex flex-col '>
          <p className='text-sm bg-[#F8F2F5] text-[#7D305E] border border-[#7D305E] rounded-full px-4 py-2 w-fit'>
            Article Of The Week
          </p>
          <h3 className='text-2xl font-bold text-[#0F2837] mt-6'>Title</h3>

          <div className='flex items-center gap-3 mt-2'>
            <p className='bg-[#E7EAEB] py-2 px-3 rounded-full'>Project</p>
            <div className='w-0.5 h-8 bg-gray-300'></div>
            <p className='bg-[#F4F4F4] py-2 px-3 text-[#767676] rounded-full'>Industrial Design</p>
          </div>
          <p className='text[#A0A0A0] max-w-[700px] mt-4'>
            Lorem ipsum dolor sit amet consectetur. Vitae pulvinar at enim ac magna. Nisi pretium
            viverra pharetra risus nunc justo molestie nunc. Purus aliquam condimentum at suscipit
            urna eu. Duis in eleifend turpis interdum vulputate velit sed id dictum. Sollicitudin
            libero quis orci ut metus nullam. At in sed et placerat ornare convallis scelerisque
            quis. Et libero lacus mattis sit eget. Arcu duis odio viverra risus at urna ultricies.
            Varius sed senectus pretium sagittis.
          </p>
          <div className='flex items-center gap-2 mt-4'>
            <p className=' text-[#767676]'>#Cultural</p>
            <p className=' text-[#767676]'>#Recreational</p>
          </div>
          <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 mt-4'>
            <Image
              src='/assets/Author.jpg'
              alt='article'
              width={50}
              height={50}
              className='rounded-full'
            />
            <div>
              <p className='text-sm font-medium text-[#0F2837]'>Author name</p>
              <p className='text-sm text-[#767676]'>Publish Date 12/04/2024</p>
            </div>
          </div>
          <div className='flex items-center justify-center gap-2 text-[#767676] font-bold'>
            <span className='flex items-center gap-2'>
              <ThumbsUpIcon className='w-4 h-4' /> 73
            </span>
            <span className='flex items-center gap-2'>
              <MessageSquareDot className='w-4 h-4' /> 820
            </span>
          </div>
          </div>
          <Button className='bg-main h-[53px] hover:bg-[#FF5733]/90 text-white px-6 py-4 text-lg font-medium rounded-md transition-all duration-300 w-fit capitalize cursor-pointer mt-6'>
            View More
          </Button>
        </div>
      </div>
    </div>
  );
}
