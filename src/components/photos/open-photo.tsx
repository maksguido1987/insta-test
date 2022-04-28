import React from 'react';
import Image from 'next/image';

interface IProps {
  src: string;
  alt: string;
}

export const OpenPhoto: React.FC<IProps> = ({ src, alt }) => {
  return (
    <div className='basis-2/3 lg:mr-5 sm:mr-2 mb-5 sm:mb-0 rounded-md'>
      <div className='relative pb-[100%]'>
        <Image
          src={src}
          alt={alt}
          objectFit='cover'
          layout='fill'
          className='rounded-md'
          priority
        />
      </div>
    </div>
  );
};
