import { GetStaticProps } from 'next';
import React, { FC } from 'react';
import { server } from '../config';

const FindMap: FC = () => {
  return <div>FindMap</div>;
};

export default FindMap;

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`${server}/api/home`);
  const homepage = await res.json();

  return {
    props: {
      homepage,
    },
  };
};
