import Container from "/component/container/container";
import Logo from "../Logo/Logo";
import styles from "../Footer/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          [ソーシャル]
        </div>
      </Container>
    </footer>
  );
}
