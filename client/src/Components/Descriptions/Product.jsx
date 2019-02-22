import React from 'react';

class Product extends React.Component {
  constructor(props) {
    super (props)
    this.state = {

    }
  }
  render (){
    return (
      <div>
        <div className="product-detail-container">
          <div className="detail-title">PRODUCT DETAIL</div>
          <div className="material-title">MATERIALS & CARE</div>
        </div>
        <hr/>
        
      </div>
    )
  }
}
export default Product; 