import { GetStaticProps } from 'next';
import React from 'react';
import { server } from '../config';

const Search = () => {
  return <div>search</div>;
};

export default Search;

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`${server}/api/home`);
  const homepage = await res.json();

  return {
    props: {
      homepage,
    },
  };
};
