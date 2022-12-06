import styles from '../styles/Home.module.scss';
import contentful from '../utils/client';
import { createClient } from 'contentful';

import Image from 'next/image';
import Article from '../components/Article';

export async function getStaticProps() {
  //const client = await contentful;

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const page = await client.getEntry('7peMLKCMPQR95SfCWLNX92');
  const articles = await client.getEntries({ content_type: 'article' });

  return {
    props: {
      pageData: page,
      articles: articles.items,
    },
  };
}

export default function Home({ pageData, articles }) {
  const { fields } = pageData;

  return (
    <>
      <main className={styles.main}>
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
            <li>Unique</li>
            <li>Custom</li>
            <li>Quality</li>
          </ul>
          {articles &&
            articles.map((article, index) => (
              <Article
                key={article.fields.title}
                index={index}
                data={article}
              />
            ))}
        </section>
      </main>
    </>
  );
}
