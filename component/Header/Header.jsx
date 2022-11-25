import Logo from "../Logo/Logo";
import Nav from "../nav/nav";

export default function Header() {
  return (
    <>
      <header>
        <Logo boxOn />
        <Nav />
      </header>

      <main>
        <div>
          <h1>CUBE</h1>
          <p>アウトプットしていくサイト</p>
        </div>
      </main>

      <footer>FOOTER</footer>
    </>
  );
}
