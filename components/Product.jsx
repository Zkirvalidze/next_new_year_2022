import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';
import {BsCheckLg} from 'react-icons/bs'
import {BsShieldCheck} from "react-icons/bs"
const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name" style={{maxWidth:"250px"}}>{name}</p>
          <p className="product-price">${price}</p>
    <div >
      <BsCheckLg/> <span  >უფასო მიწოდება</span>
    </div >
     <div>
      <BsShieldCheck/> <span> ხარისხის გარანტია</span>
     </div>
        </div>
      </Link>
    </div>
  )
}


export default Product