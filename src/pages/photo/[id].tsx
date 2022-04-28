import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import getConfig from 'next/config';
import { Comments, Layout, OpenPhoto, PageWrapper } from '../../components';
import { IComment, IPhoto } from '../../types';

const { publicRuntimeConfig } = getConfig();
export const { API_BASE_URL } = publicRuntimeConfig;

const Photo: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ photo, comments }) => {

  const { url, title } = photo;

  return (
    <PageWrapper>
      <Layout className='sm:flex'>
        <OpenPhoto src={url} alt={title} />
        <Comments comments={comments}  />
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
