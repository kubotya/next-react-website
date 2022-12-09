import Container from "/component/container/container";
import Logo from "../Logo/Logo";
import Social from "component/social/social";
import styles from "../Footer/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  );
}
