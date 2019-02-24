import React from 'react';
import Details from './Details.jsx';
import Materials from './Materials.jsx'

class Product extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      detailsToggle: true,
      materialToggle: false,
    }
    this.clickDetail = this.clickDetail.bind(this)
    this.clickMaterial = this.clickMaterial.bind(this)
  }

  clickDetail () {
    this.setState({
      detailsToggle: true,
      materialToggle: false,
    })
  }

  clickMaterial () {
    this.setState({
      detailsToggle: false,
      materialToggle: true,
    })
  }

  render (){
    const detailSelect = this.state.detailsToggle ? "detail-title-select" : "detail-title"
    // const detailClass = `tower${props.index} ${selected} carouselPic`
    const materialSelect = this.state.materialToggle ? "material-title-select" : "material-title"
    // const materialClass = `tower${props.index} ${selected} carouselPic`
    return (
      <div>
        <div className="product-detail-container">
          <div className={detailSelect} onClick={()=> this.clickDetail()}>PRODUCT DETAIL</div>
          <div className={materialSelect} onClick={()=> this.clickMaterial()}>MATERIALS & CARE</div>
        </div>
        <hr/>
        <div className="product-description">
          {this.state.detailsToggle 
          ? <Details details={this.props.details} detailsToggle={this.state.detailsToggle}/> 
          : <Materials material={this.props.material} care={this.props.care} materialToggle={this.state.materialToggle}/>
            }
        </div>
      </div>
    )
  }
}
export default Product; 