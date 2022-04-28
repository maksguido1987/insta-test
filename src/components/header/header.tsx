import React from 'react';
import Image from 'next/image';
import icon from '../../../public/images/icons/header-icon.png';
import { useRouter } from 'next/router';

export const Header = () => {
  const router = useRouter();

  return (
    <header className='flex items-center py-5 md:max-w-7xl m-auto md:px-4 px-2 text-gray-800'>
      <div className='relative w-9 h-7 mr-5'>
        <Image src={icon} objectFit='cover' layout='fill' alt='photo-icon' />
      </div>
      <div
        className='font-bold text-xl cursor-pointer hover:underline transition text-gray-700'
        onClick={() => router.push('/')}
      >
        Go Home
      </div>
    </header>
  );
};
