/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext} from 'react'
import { ShopContext } from './shopcontext'
import { Link } from 'react-router-dom';
import Details from '../pages/details';
import { PRODUCTS1 } from './products';


const prod = (props) => {
    const {id, name, image, brand, data} = props.data;
    const { cartItems, viewProductDetails} = useContext(ShopContext);

    const cartItemAmount = cartItems[id];
  return <>
 <div className="col mb-5">
            <Link key={id}  className="card h-100 m-auto">
            <img src={image} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
              <p className="card-text mb-2">{brand}</p>
                <h5>{name}</h5>
                <div className="mb-3">
                <p className="mb-2">{data}</p>
                <Link to='/details' onClick={() => viewProductDetails(id)}>
                <p className="text-center mt-5 mb-15"><button className='fs-10' id='clear-cart'>Selengkapnya</button></p>
                </Link>
                </div>
              </div>
            </Link>    
        </div>
  </>
}

export default prod