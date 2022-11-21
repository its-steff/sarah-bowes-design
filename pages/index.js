import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { createClient } from 'contentful';
import Navigation from '../components/Navigation/index';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const result = await client.getEntries();

  return {
    props: {
      items: result.items,
    },
  };
}

export default function Home({ items }) {
  const [content, setContent] = useState(items[0]);

  useEffect(() => {}, [content]);

  console.log(content.fields.body);

  const handleClick = (event) => {
    console.log('you clicked');
    console.log(event.target.innerText);
    console.log('items in handleClick:', items);
    const newSelection = items.find(
      (item) => item.fields.title === event.target.innerText
    );
    setContent(newSelection);
    console.log('this is the new selection:', newSelection);
  };

  return (
    <div>
      <Head>
        <title>Sarah Bowes Design</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <header>Sarah Bowes Design AS</header>
      <nav>
        <ul>
          {items &&
            items.map((item) => (
              <li key={item.sys.id}>
                <button onClick={(event) => handleClick(event)}>
                  {item.fields.title}
                </button>
              </li>
            ))}
        </ul>
      </nav>
      <div>
        <Image
          alt={content.fields.featureImage.fields.description}
          src={`https:${content.fields.featureImage.fields.file.url}`}
          width='300'
          height='200'
        />
        <div>{documentToReactComponents(content.fields.body)}</div>
        <div>{documentToReactComponents(content.fields.description)}</div>
      </div>
    </div>
  );
}
