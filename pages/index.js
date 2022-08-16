import React from 'react'
import { client } from '../lib/client';

const Home = ({products}) => {
  console.log(products)
  return (
    <div>index</div>
  )
}
export const getServerSideProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);


  return {
    props: { products },
  };
};

export default Home