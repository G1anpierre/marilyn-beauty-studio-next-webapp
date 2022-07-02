import { GetStaticProps } from 'next';
import React, { FC } from 'react';

const FindMap: FC = () => {
  return <div>FindMap</div>;
};

export default FindMap;

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('http://localhost:3001/api/home');
  const homepage = await res.json();

  return {
    props: {
      homepage,
    },
  };
};
