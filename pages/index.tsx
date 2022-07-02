import type { GetStaticProps } from 'next';
import { Navbar, NavbarProps } from '../src/components/Navbar';

export type HomePageData = {
  homepage: {
    navbar: NavbarProps;
  };
};

const Home = ({
  homepage: {
    navbar: { desktopNav, mobileNav },
  },
}: HomePageData) => {
  return (
    <>
      <div className="container">
        <Navbar desktopNav={desktopNav} mobileNav={mobileNav} />
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  console.log('context :', context);
  const res = await fetch('http://localhost:3000/api/home');
  const homepage = await res.json();

  return {
    props: {
      homepage,
    },
  };
};
