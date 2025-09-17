'use client';

import { followingContent, forYouContent } from '@/lib/data/foryou';
import Image from 'next/image';
import { useState } from 'react';
import Card from '../Shared/Card';
import SharedButton from '../Shared/SharedButton';

export default function ForYou() {
  const [activeTab, setActiveTab] = useState<'foryou' | 'following'>('foryou');

  return (
    <div className='bg-secondary section-padding relative overflow-hidden relative'>
      <div className='flex items-center gap-8'>
        <h2
          className={`text-3xl font-bold duration-300 cursor-pointer transition-all ${
            activeTab === 'foryou'
              ? 'text-main border-b-4 border-b-main'
              : 'text-[#74828B] hover:border-b-4 hover:border-main'
          }`}
          onClick={() => setActiveTab('foryou')}
        >
          For You
        </h2>
        <h2
          className={`text-3xl duration-300 cursor-pointer transition-all ${
            activeTab === 'following'
              ? 'text-main border-b-4 border-b-main'
              : 'text-[#74828B] hover:border-b-4 hover:border-main'
          }`}
          onClick={() => setActiveTab('following')}
        >
          Following
        </h2>
      </div>

      <div className='w-full h-[1px] bg-gray-300 my-1'></div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
        {activeTab === 'foryou'
          ? forYouContent.map((item, index) => (
              <Card
                key={index}
                text1={item.text1}
                textcolor={item.textcolor}
                text2={item.text2}
                image={item.image}
              />
            ))
          : followingContent.map((item, index) => (
              <Card
                key={index}
                text1={item.text1}
                textcolor={item.textcolor}
                text2={item.text2}
                image={item.image}
              />
            ))}
      </div>
      <div className='flex items-center justify-center mt-8'>
        <SharedButton title='View more' bgColor='bg-main' textColor='text-white' />
      </div>

      <div className='bg-secondary mt-4'>
        <Image
          src='/assets/layer.png'
          alt='foryou'
          width={500}
          height={500}
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  );
}
