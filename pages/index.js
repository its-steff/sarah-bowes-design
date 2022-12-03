import styles from '../styles/Home.module.scss';
import contentful from '../utils/client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

export async function getStaticProps() {
  const client = contentful;
  const result = await client.getEntry('7peMLKCMPQR95SfCWLNX92');

  console.log('this is the result:', result);

  return {
    props: {
      item: result,
    },
  };
}

export default function Home({ item }) {
  const { fields } = item;

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
        </section>
      </main>
    </>
  );
}
