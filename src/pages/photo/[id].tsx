import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import getConfig from 'next/config';
import { useState } from 'react';
import { Comments, Layout, OpenedPhoto, PageWrapper } from '../../components';
import { IComment, IPhoto } from '../../types';

const { publicRuntimeConfig } = getConfig();
export const { API_BASE_URL } = publicRuntimeConfig;

const Photo: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ photo, comments }) => {
  const [photoState, setPhotoState] = useState<Pick<IPhoto, 'url' | 'title'>>(photo);
  const [commentsState, setCommentsState] = useState<IComment[]>(comments);

  const { url, title } = photoState;

  return (
    <PageWrapper>
      <Layout className='sm:flex'>
        <OpenedPhoto src={url} alt={title} />
        <Comments comments={commentsState} />
      </Layout>
    </PageWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const responsePhoto = await fetch(`${API_BASE_URL}photos/${params?.id}`);
    const photo: IPhoto = await responsePhoto.json();

    const responseComments = await fetch(
      `${API_BASE_URL}comments?postId=${params?.id}`
    );
    const comments: IComment = await responseComments.json();

    return {
      props: {
        photo,
        comments,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Photo;
