import React from 'react';
import { IComment } from '../../types';

export const Commentary: React.FC<IComment> = ({ body, email, name }) => {
  return (
    <div className='mb-2 last:mb-0 md:shadow-md shadow-sm bg-gray-600 text-white lg:p-5 p-2 rounded-md shadow-white'>
      <div className='mb-2 text-sm'>{body}</div>
      <div className='text-xs'>
        <span className='font-semibold'>Email:</span> {email}
      </div>
      <div className='text-xs'>
        <span className='font-semibold'>Name:</span> {name}
      </div>
    </div>
  );
};
