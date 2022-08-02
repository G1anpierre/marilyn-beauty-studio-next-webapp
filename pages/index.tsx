import type { GetStaticProps } from 'next';
import { Navbar, NavbarProps } from '../src/components/Navbar';
import { server } from '../config';

export type HomePageData = {
  homepage: {
    navbar: NavbarProps;
  };
};

const Home = ({ title }: any) => {
  return (
    <>
      <div className="container">{title}</div>
      <style jsx>{``}</style>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`${server}/api/home`);
  const homepage = await res.json();

  return {
    props: {
      homepage,
    },
  };
};
