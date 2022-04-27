import React from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout: React.FC<IProps> = React.memo(
  ({ children, className }) => {
    return (
      <section className={className ? className : ''}>
        <div className='md:max-w-5xl m-auto md:px-4 px-2'>{children}</div>
      </section>
    );
  }
);

Layout.displayName = 'Layout';
