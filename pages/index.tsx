import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <div className="title">Hello Next</div>
      <style jsx>{`
        .title {
          font: var(--headline1);
        }
      `}</style>
    </>
  );
};

export default Home;
