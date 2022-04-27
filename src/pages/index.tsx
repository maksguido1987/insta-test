import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import React from 'react';
import { PageWrapper } from '../components';
import { IPhotos } from '../types/photos.types';

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (photos) => {
  console.log(photos)
  return (
    <PageWrapper>
      
    </PageWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
    const photos: IPhotos = await response.json();

    return {
      props: {
        photos
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Home;
