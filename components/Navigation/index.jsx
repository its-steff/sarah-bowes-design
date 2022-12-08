import Link from 'next/link';
import styles from './navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/projects'>Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
