import React from 'react'
import { client , urlFor} from '../../lib/client';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useStateContext } from '../../context/StateContext';
const ProductDetails = ({product,products}) => {
const {incQty,decQty,qty,onAdd,} = useStateContext()

    const { image, name, details, price } = product;
  return (
      <div >
        <div className='product-detail-container'> 
        <div className='image-container'>
            <img src={urlFor(image&&image[0])} style={{width:"600px"}} />
        </div>



        <div className="product-detail-desc">
          <h1>{name}</h1>
          <h4>დეტალურად: </h4>
          <p>{details}</p>
          <p className="price">{price}ლ</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={()=>onAdd(product,qty)}>კალათაში დამატება</button>
            <button type="button" className="buy-now" onClick={()=>{}}>შეკვეთა</button>
          </div>
        </div>
      </div>
            </div>

    
      
  )
}


export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;
  
    const products = await client.fetch(query);
  
    const paths = products.map((product) => ({
      params: { 
        slug: product.slug.current
      }
    }));
  
    return {
      paths,
      fallback: 'blocking'
    }
  }

export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'
    
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
  
    console.log(product);
  
    return {
      props: { products, product }
    }
  }
export default ProductDetails