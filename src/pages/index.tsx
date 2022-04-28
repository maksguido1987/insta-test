import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import getConfig from 'next/config';
import React, { useEffect, useRef, useState } from 'react';
import { getPhotos } from '../api/get-photos';
import { PageWrapper, Photos } from '../components';
import { pageCount } from '../constants/constants';
import useIntersectionObserver from '../hooks/use-intersection';
import { IPhoto } from '../types';

const { publicRuntimeConfig } = getConfig();
export const { API_BASE_URL } = publicRuntimeConfig;

const Home: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ photos }) => {
  const [photosState, setPhotosState] = useState<IPhoto[]>(photos);
  const [page, setPage] = useState(pageCount);

  const photosRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(photosRef, { rootMargin: '50%' });
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    isVisible && setPage((prevState) => prevState + 1);
    isVisible && getPhotos(page, setPhotosState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <PageWrapper>
      <Photos photos={photosState} ref={photosRef} />
    </PageWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}photos?_page=1&_limit=21`);
    const photos: IPhoto[] = await response.json();

    return {
      props: {
        photos,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Home;
