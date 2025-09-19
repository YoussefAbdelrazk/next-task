import { MessageSquareDot, ThumbsUpIcon } from 'lucide-react';
import Image from 'next/image';

export default function Card({
  text1,
  text2,
  textcolor,
  image,
}: {
  text1?: string;
  text2?: string;
  textcolor?: string;
  image: string;
}) {
  return (
    <div className='bg-white rounded-lg p-4 border  border-[#E8E9E9] flex flex-col items-center justify-center'>
      <div className='flex  items-center justify-center'>
        <Image src={image} alt='article' width={500} height={500} />
      </div>

      <div className='flex flex-col gap-5 w-full mt-5'>
        <h3 className='text-2xl font-bold text-[#0F2837] '>Title</h3>

        <div className='flex items-center gap-3 '>
          <p className='bg-[#E7EAEB] py-2 px-3 rounded-full' style={{ backgroundColor: textcolor }}>
            {text1}
          </p>
          <div className='w-0.5 h-8 bg-gray-300'></div>
          <p className='bg-[#F4F4F4] py-2 px-3 text-[#767676] rounded-full'>{text2}</p>
        </div>
        <p className='text-gray-500 max-w-[700px]  '>
          Lorem ipsum dolor sit amet consectetur. Vitae pulvinar at enim ac magna. Nisi pretium
          viverra pharetra risus nunc justo molestie nunc..
        </p>
        <div className='flex items-center gap-2 '>
          <p className=' text-[#767676]'>#Cultural</p>
          <p className=' text-[#767676]'>#Recreational</p>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 '>
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
      </div>
    </div>
  );
}
