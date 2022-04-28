import React from 'react';
import { IPhoto } from '../../types/photo.types';
import { Layout } from '../layout';
import { Photo } from './photo';

interface IPhotosProps {
  photos: IPhoto[];
}

export const Photos = React.forwardRef<HTMLDivElement, IPhotosProps>(
  ({ photos }, ref) => {
    const renderPhoto = (photo: IPhoto) => {
      const { id, url, title } = photo;
      return <Photo url={url} id={id} key={id} title={title} />;
    };

    return (
      <Layout className='grid md:grid-cols-3 sm:grid-cols-2 gap-2 pt-1'>
        {photos.length && photos.map(renderPhoto)}
        <div ref={ref}></div>
      </Layout>
    );
  }
);

Photos.displayName = 'Photos';
