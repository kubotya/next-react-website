import Header from "component/Header";
import Footer from "component/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
