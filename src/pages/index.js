import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import Order from "../components/Order";
import Populer from "../components/Populer";
import Review from "../components/Review";
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
      <Order />
      <MainLayout>
        <Review />
      </MainLayout>
    </div>
  );
}
