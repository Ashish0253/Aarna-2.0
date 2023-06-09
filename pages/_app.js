import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";
import "@/styles/globals.css";
import { useEffect, useMemo, useRef, useState } from "react";
import useIntersection from "@/hooks/useIntersection";
import ScrollButton from "@/components/layout/ScrollButton";
import Whatsapp from "@/components/layout/whatsapp";

export default function App({ Component, pageProps }) {
  const [sidebar, setSidebar] = useState(false);

  const ref3 = useRef(null);

  const isInViewport3 = useIntersection(ref3, "0px");
  console.log("isInViewport3: ", isInViewport3);

  useEffect(() => {
    setSidebar(!isInViewport3);
    console.log("isInViewport3 doosra wala: ", isInViewport3);
  }, [isInViewport3]);

  return (
    <div className="font-body bg-[#f2f2f2]">
      <Header />
      <Navbar />
      <ScrollButton />
      <Whatsapp />
      <Sidebar sidebar={sidebar} />
      <Component {...pageProps} ref3={ref3} />
      <Footer />
    </div>
  );
}
