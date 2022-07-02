import { GetStaticProps } from 'next';
import React from 'react';

const Search = () => {
  return <div>search</div>;
};

export default Search;

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('http://localhost:3001/api/home');
  const homepage = await res.json();

  return {
    props: {
      homepage,
    },
  };
};
