import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import Populer from "../components/Populer";
import Services from "../components/Services";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Flooop | welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainLayout>
        <Services />
      </MainLayout>
      <About />
      <Populer />
    </div>
  );
}
