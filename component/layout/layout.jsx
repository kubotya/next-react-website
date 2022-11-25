import Header from "/component/Header/Header";
import Footer from "/component/Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
