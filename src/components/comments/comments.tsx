import React, { useEffect, useState } from 'react';
import { IComment } from '../../types';
import { AddComment } from '../add-comment';
import { Commentary } from './comment';

interface IProps {
  comments: IComment[];
}

export const Comments: React.FC<IProps> = ({ comments }) => {
  const [commentsState, setcCmmentsState] = useState<IComment[]>([]);

  const onAddComment = (data: IComment) => {
    setcCmmentsState((prevState) => prevState.concat(data));
  };

  useEffect(() => {
    setcCmmentsState(comments);
  }, [comments]);

  const renderComment = (comment: IComment) => {
    const { body, email, id, name } = comment;
    return <Commentary body={body} email={email} name={name} key={id} />;
  };

  return (
    <div className='basis-1/3'>
      <h3 className='font-semibold md:font-bold mb-2 sm:mb-5 text-center sm:text-2xl text-xl text-gray-800'>
        Comments
      </h3>
      {commentsState.length && commentsState.map(renderComment)}
      <AddComment onAddComment={onAddComment} />
    </div>
  );
};
