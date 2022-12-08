import styles from './footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faSquareInstagram,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';

const Footer = ({ logo, address, phone }) => {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.logo_title}>{logo}</p>
        <p>{address}</p>
        <p>{phone}</p>
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
