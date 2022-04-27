import React from 'react';
import { Footer } from '../footer';
import { Header } from '../header';

interface IProps {
  children: React.ReactNode;
}

export const PageWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen bg-fon bg-no-repeat bg-cover'>
      <div className='border-b border-gray-200'>
        <Header />
      </div>
      <main className='min-w-full grow'>{children}</main>
      <div className='border-t border-gray-200'>
        <Footer />
      </div>
    </div>
  );
};
