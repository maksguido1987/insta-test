import React from 'react';
import { Footer } from '../footer';
import { Header } from '../header';

interface IProps {
  children: React.ReactNode;
}

export const PageWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen bg-neutral-200'>
      <div className='border-b border-white md:mb-5 mb-2'>
        <Header />
      </div>
      <main className='min-w-full grow'>{children}</main>
      <div className='border-t mt-5 border-white'>
        <Footer />
      </div>
    </div>
  );
};
