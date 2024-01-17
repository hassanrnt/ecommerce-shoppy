import React, {useContext} from 'react';
// import product context
import {ProductContext} from '../contexts/ProductContext';

const Home = () => {
  // get product from product context
  const {products} = useContext(ProductContext);
  console.log(products);
  // get only men's & women's clothing category
  const filteredProducts = products.filter(item => item.category)


  return( 
  <div>
     Homepage
    
    </div>
    );
};

export default Home;
