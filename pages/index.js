import React from 'react'
import { client } from '../lib/client';
import {Product} from '../components'

const Home = ({products}) => {

  return (
    <div>

    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
    </div>
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