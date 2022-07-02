import type { GetStaticProps } from 'next';
import { Navbar, NavbarProps } from '../src/components/Navbar';

export type HomePageData = {
  homepage: {
    navbar: NavbarProps;
  };
};

const Home = ({ title }: any) => {
  console.log('title : ', title);
  return (
    <>
      <div className="container"></div>
      <style jsx>{``}</style>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  console.log('context :', context);
  const res = await fetch('http://localhost:3001/api/home');
  const homepage = await res.json();

  return {
    props: {
      homepage,
    },
  };
};
