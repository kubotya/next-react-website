import Container from "/component/container/container";
import Logo from "../Logo/Logo";
import Nav from "../nav/nav";
import styles from "../Header/Header.module.css";

export default function Header() {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  );
}
