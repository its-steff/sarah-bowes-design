import styles from '../styles/Projects.module.scss';

import { createClient } from 'contentful';

import Layout from '../components/Layout';
import ProjectMenu from '../components/ProjectMenu';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const layout = await client.getEntries({ content_type: 'footer' });
  const page = await client.getEntry('4vJv3QjMqkPuwga9JguU0v');
  const projects = await client.getEntries({ content_type: 'project' });

  return {
    props: {
      pageData: page,
      layout: layout.items,
      projects: projects.items,
    },
  };
}

export default function Projects({ pageData, layout, projects }) {
  const options = {
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br />, text]),
  };

  return (
    <Layout data={layout}>
      <section className={styles.project_page}>
        {projects && <ProjectMenu projects={projects} />}
        <article>
          {pageData && documentToReactComponents(pageData.fields.body, options)}
        </article>
      </section>
    </Layout>
  );
}
