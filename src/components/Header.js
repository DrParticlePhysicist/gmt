import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/BOTOL.png" />
      </div>
      <nav className={styles.nav}>
        <a href="#shop">Shop</a>
        <a href="#contact">Contact Us</a>
        <a href="#about">About</a>
        <a href="#journal">Journal</a>
        <a href="#custom">Custom</a>
        <button className={styles.inquiryButton}>Inquiry Now</button>
      </nav>
    </header>
  );
}
