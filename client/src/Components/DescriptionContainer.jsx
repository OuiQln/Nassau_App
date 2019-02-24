import React from 'react'

import ProductName from './Descriptions/ProductName.jsx';
import Stars from './Descriptions/Stars.jsx';
import Colors from './Descriptions/Colors.jsx';
import DropDownMenus from './Descriptions/DropDownMenus.jsx';
import AddToBag from './Descriptions/AddToBag.jsx';
import FindInStore from './Descriptions/FindInStore.jsx';
import Product from './Descriptions/Product.jsx'
import SKU from './Descriptions/SKU.jsx'
import Price from './Descriptions/Price.jsx'

const DescriptionContainer = props => {
  return (
    <div className="DescriptionContainer" id="descriptionContainer">
      <div>
        <ProductName productName={props.productName}/>
      </div>
      <div>
        <SKU sku={props.sku}/>
      </div>
      <div>
        <Stars stars={props.stars} reviews={props.reviews}/>
      </div>
      <div>
        <Price price={props.price}/>
      </div>
      <hr/>
      <div>
        <Colors colors={props.colors} colorNames={props.colorNames} />
      </div>
      <hr/>
      <div className="ruler">
      <i className="fas fa-ruler"></i>
      <span className="sizeChart">SIZE CHART</span>
      </div>
      <div>
        <DropDownMenus sizes={props.sizes}/>
      </div>
      <div>
        <AddToBag/>
      </div>
      <div>
        <FindInStore/>
      </div>
      <div>
        <Product details={props.details} material={props.material} care={props.care}/>
      </div>
    </div>
    )
  };

export default DescriptionContainer; 