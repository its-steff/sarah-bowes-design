import styles from './article.module.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

const Article = ({ data }) => {
  const { fields } = data;

  return (
    <div className={styles.article}>
      <div className={styles.image_container}>
        <Image
          alt={fields.featureImage.fields.description}
          src={`https:${fields.featureImage.fields.file.url}`}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.text}>
        {documentToReactComponents(fields.body)}
      </div>
    </div>
  );
};

export default Article;
