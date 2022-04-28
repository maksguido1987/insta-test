import React from 'react';
import Image from 'next/image';
import { IPhoto } from '../../types/photo.types';
import Link from 'next/link';

type IProps = Pick<IPhoto, 'url' | 'id' | 'title'>;

export const Photo: React.FC<IProps> = React.memo(({ url, title, id }) => {
  return (
    <Link href={`/photo/${id}`}>
      <a className='relative max-w-[600px] max-h-[600px] pb-[100%] cursor-pointer transition hover:ring-2 rounded-md ring-orange-400'>
        <Image
          src={url}
          alt={title}
          objectFit='cover'
          layout='fill'
          priority
          className='rounded-md'
        />
      </a>
    </Link>
  );
});

Photo.displayName = 'Photo';
