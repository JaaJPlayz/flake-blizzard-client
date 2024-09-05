import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ChildrenType } from "../types";

function Layout({ children }: ChildrenType) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
