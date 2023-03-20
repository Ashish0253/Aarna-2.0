import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="font-body">
      <Header />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
