import Head from 'next/head';
import Header from './header';
import Card from './card';
import Footer from './footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="main">
        <h1>Welcome to My Project</h1>
        <div className="card-container">
          <Card title="Card 1" description="Description for Card 1" />
          <Card title="Card 2" description="Description for Card 2" />
          <Card title="Card 3" description="Description for Card 3" />
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .card-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}
