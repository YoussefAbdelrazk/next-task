'use client';
import { cn } from '@/lib/utils';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'placeholder'> {
  fallback?: string;
  className?: string;
  priority?: boolean;
  lazy?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  fallback = '/assets/placeholder.jpg',
  className = '',
  priority = false,
  lazy = true,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {isLoading && (
        <div className='absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center'>
          <div className='w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin' />
        </div>
      )}

      <Image
        src={hasError ? fallback : src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        priority={priority}
        loading={lazy ? 'lazy' : 'eager'}
        placeholder='blur'
        blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
        className={cn('transition-opacity duration-300', isLoading ? 'opacity-0' : 'opacity-100')}
        {...props}
      />
    </div>
  );
}
