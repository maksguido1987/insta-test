import React from 'react';
import Image from 'next/image';
import { Layout } from '../layout';
import icon from '../../../public/images/icons/header-icon.png';

export const Header = () => {
  return (
    <header className='flex items-center py-5 md:max-w-4xl m-auto md:px-4 px-2 text-gray-800'>
      <div className='relative w-9 h-7 mr-5'>
        <Image src={icon} objectFit='cover' layout='fill' alt='photo-icon' />
      </div>
      Header
    </header>
  );
};
