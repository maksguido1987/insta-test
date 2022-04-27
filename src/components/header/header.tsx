import React from 'react';
import Image from 'next/image';
import { Layout } from '../layout';
import icon from '../../../public/images/icons/header-icon.png';

export const Header = () => {
  return (
    <Layout>
      <header className='flex items-center py-5'>
        <div className='relative w-9 h-7 mr-5'>
          <Image src={icon} objectFit='cover' layout='fill' alt='photo-icon' />
        </div>
        Header
      </header>
    </Layout>
  );
};
