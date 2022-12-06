import styles from './footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faSquareInstagram,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.logo_title}>SARAH BOWES DESIGN AS</p>
        <p>
          Olaf Schousvei 6 <br />
          0572s Oslo <br />
          Norway
        </p>
        <p>+48 481 58 606</p>
      </div>

      <div className={styles.socialMedia_container}>
        <FontAwesomeIcon icon={faSquareEnvelope} style={{ fontSize: 50 }} />
        <FontAwesomeIcon icon={faSquareInstagram} style={{ fontSize: 50 }} />
        <FontAwesomeIcon icon={faFacebookSquare} style={{ fontSize: 50 }} />
      </div>
    </footer>
  );
};

export default Footer;
