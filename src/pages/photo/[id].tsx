import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";

const Photo: NextPage<
InferGetServerSidePropsType<typeof getServerSideProps>
> = () => {
  
  return (
    <div></div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const { params } = context;

  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Photo;
