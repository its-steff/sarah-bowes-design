import { createClient } from 'contentful';
import styles from '../../styles/Project.module.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../../components/Layout';
import Image from 'next/image';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const result = await client.getEntries({ content_type: 'project' });

  const paths = result.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'project',
    'fields.slug': params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const layout = await client.getEntries({ content_type: 'footer' });
  return {
    props: { project: items[0], layout: layout.items },
    //revalidate: 1
  };
}

const ProjectPage = ({ project, layout }) => {
  const { fields } = project;
  return (
    <Layout data={layout}>
      <div className={styles.project_container}>
        <div className={styles.content_container}>
          <div className={styles.image_container}>
            <Image
              alt={fields.featureImage.fields.description}
              src={`https:${fields.featureImage.fields.file.url}`}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className={styles.description}>
            {documentToReactComponents(fields.description)}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectPage;
