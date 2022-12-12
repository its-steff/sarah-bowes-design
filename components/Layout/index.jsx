import styles from './layout.module.scss';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ data, children }) => {
  const { fields } = data[0];

  return (
    <>
      <Header logo={fields.companyTitle} />
      <main className={styles.main}>{children}</main>
      <Footer
        logo={fields.companyTitle}
        address={fields.address}
        phone={fields.phoneNumber}
      />
    </>
  );
};

export default Layout;
