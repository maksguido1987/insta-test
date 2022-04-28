import React, { useState } from 'react';
import { IComment } from '../../types';

interface IProps {
  className?: string;
  onAddComment: (data: IComment) => void;
}

export const AddComment: React.FC<IProps> = ({ className, onAddComment }) => {
  const [textValue, setTextValue] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setTextValue(value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleTNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    const id = new Date().getTime();
    onAddComment({ body: textValue, id, email, name });
    setTextValue('');
    setEmail('');
    setName('');
  };

  const isDisabledBtn = !textValue.length || !name.length;

  return (
    <form
      className={`${className ? className : ''} flex flex-col gap-y-3 mt-5`}
    >
      <textarea
        className='w-full focus:ring ring-gray-600 min-h-[100px] focus:outline-none p-2 text-sm rounded-md text-gray-800'
        placeholder='New comment...'
        value={textValue}
        onChange={handleTextChange}
        required
      />
      <input
        type='email'
        className='w-full focus:ring ring-gray-600 focus:outline-none p-2 text-sm rounded-md text-gray-800'
        placeholder='Your email'
        required
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type='text'
        className='w-full focus:ring ring-gray-600 focus:outline-none p-2 text-sm rounded-md text-gray-800'
        placeholder='Your name'
        required
        value={name}
        onChange={handleTNameChange}
      />
      <input
        type='submit'
        value='Add comment'
        className='rounded-md bg-gray-600 px-5 py-2.5 text-white cursor-pointer disabled:bg-gray-300 disabled:cursor-default hover:bg-gray-500 transition active:ring active:bg-gray-500 ring-gray-600 w-full'
        onClick={handleClick}
        disabled={isDisabledBtn}
      />
    </form>
  );
};
