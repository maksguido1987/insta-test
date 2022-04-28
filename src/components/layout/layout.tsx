import React from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout: React.FC<IProps> = React.memo(
  ({ children, className }) => {
    return (
      <section
        className={`${
          className ? className : ''
        } md:max-w-7xl m-auto md:px-4 px-2`}
      >
        {children}
      </section>
    );
  }
);

Layout.displayName = 'Layout';
