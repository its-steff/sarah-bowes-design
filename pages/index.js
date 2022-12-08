import styles from '../styles/Home.module.scss';
import contentful from '../utils/client';
import { createClient } from 'contentful';

import Image from 'next/image';
import Layout from '../components/Layout';
import Article from '../components/Article';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const layout = await client.getEntries({ content_type: 'footer' });
  const page = await client.getEntry('7peMLKCMPQR95SfCWLNX92');
  const articles = await client.getEntries({ content_type: 'article' });

  return {
    props: {
      pageData: page,
      articles: articles.items,
      layout: layout.items,
    },
  };
}

export default function Home({ pageData, articles, layout }) {
  const { fields } = pageData;

  return (
    <Layout data={layout}>
      <div className={styles.image_container}>
        <Image
          alt={fields.featureImage.fields.description}
          src={`https:${fields.featureImage.fields.file.url}`}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <section>
        <ul>
          {articles &&
            articles.map((article, index) => (
              <li key={index}>{article.fields.title}</li>
            ))}
        </ul>
        {articles &&
          articles.map((article, index) => (
            <Article key={article.fields.title} index={index} data={article} />
          ))}
      </section>
    </Layout>
  );
}
