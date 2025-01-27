import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2023 BOTOL. All Rights Reserved.</p>
      <div className={styles.links}>
        <a href="#">Shop</a>
        <a href="#">Contact Us</a>
        <a href="#">About</a>
        <a href="#">FAQs</a>
      </div>
    </footer>
  );
}
