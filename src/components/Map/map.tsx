import Image from 'next/image';
import SharedButton from '../Shared/SharedButton';

export default function map() {
  return (
    <div className='bg-main section-padding relative overflow-hidden'>
      <h3 className='text-white text-3xl font-bold mb-11'>Interactive Map</h3>
      {/* Map Image */}
      <div className='flex items-center justify-center'>
        <div className='w-full h-full mx-auto' >
          <Image src='/assets/features.png' alt='map' width={1000} height={800} className=' mx-auto object-cover' />
        </div>
      </div>
      {/* View more Button */}
      <div className='flex items-center justify-center mt-11'>
        <SharedButton title='View more' bgColor='bg-[#91B9B4]' textColor='text-white' />
      </div>
    </div>
  );
}
