import styles from './header.module.scss';
import Navigation from '../Navigation/';

const Header = ({ logo }) => {
  return (
    <header className={styles.header}>
      <div>{logo}</div>
      <Navigation />
    </header>
  );
};

export default Header;
