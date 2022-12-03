import styles from './header.module.scss';
import Navigation from '../Navigation/';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='logo'>Sarah Bowes Design AS</div>
      <Navigation />
    </header>
  );
};

export default Header;
