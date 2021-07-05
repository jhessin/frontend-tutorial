import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

export const getStaticPaths: GetStaticPaths = async function () {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async function ({ params }) {
  const postData =
    params && params.id && !Array.isArray(params.id)
      ? await getPostData(params.id)
      : null;
  return {
    props: {
      postData,
    },
  };
};

interface PostData {
  title: string;
  id: string;
  contentHtml: string;
  date: string;
}

interface Props {
  postData: PostData;
}

export default function Post({ postData }: Props) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
