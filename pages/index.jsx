import Head from 'next/head';
import Hero from '../src/components/Hero/Hero';
import Catalog from '../src/components/Catalog/Catalog';
import FinalCTA from '../src/components/FinalCTA/FinalCTA';
import Footer from '../src/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Motorcycle Shop</title>
        <meta name="description" content="Enduro motorcycles" />
      </Head>
      <Hero />
      <Catalog />
      <FinalCTA />
      <Footer />
    </>
  );
}

