import React from 'react';
import Image from 'next/image';
import githabIcon from '../../../public/images/icons/github.png';

export const Footer = () => {
  return (
    <footer className='md:max-w-7xl m-auto md:px-2 px-1 py-5 text-gray-800'>
      <div className='flex items-center gap-x-5'>
        <Image src={githabIcon} width={40} height={40} alt='githab-icon' />
        <a
          className='font-semibold cursor-pointer hover:underline'
          href='https://github.com/maksguido1987'
          target='_blank'
          rel='noreferrer'
        >
          github.com/maksguido1987
        </a>
      </div>
    </footer>
  );
};
