import React from 'react';
import Sizes from './Sizes.jsx';
import Quantity from './Quantity.jsx';
import styles from '../../../dist/styles/dropDownMenus.css';

class DropDownMenus extends React.Component {
  constructor(props) {
  super(props)

  this.state = {
    sizes: props.sizes,
    sizeListOpen: false,
    quantityListOpen: false,
    sizeTitle: 'Select Size',
    quantityTitle: 'QTY: 1',
    sizeSelected: '',
    sizeId: null,
    quantity: [],
    quantitySelected: 1,
  }

  this.toggleSizeList = this.toggleSizeList.bind(this);
  this.toggleQuantityList = this.toggleQuantityList.bind(this);
  this.selectSize = this.selectSize.bind(this);
  this.selectQuantity = this.selectQuantity.bind(this);
  this.closeSize = this.closeSize.bind(this);
  this.closeQuantity = this.closeQuantity.bind(this);
}

componentDidMount() {
  setTimeout(() =>{
    let quantityArr = [];
    for (let i = 1; i < 100; i++) {
      quantityArr.push(i)
    }
    this.setState ({
      quantity: quantityArr, 
    })
  }, 0)
}

componentDidUpdate(){
  setTimeout(() => {
    if(this.state.listOpen){
      window.addEventListener('click', this.close)
    }
    else{
      window.removeEventListener('click', this.close)
    }
  }, 0)
}

componentWillUnmount(){
  // window.removeEventListener('click', this.sizeClose);
  // window.removeEventListener('click', this.quantityClose);
}

selectSize(size, id){
  this.setState({
    sizeTitle: `Size: ${size}`,
    sizeListOpen: false,
    sizeSelected: size,
    sizeId: id,
  })
}

selectQuantity(number) {
  this.setState({
    quantityTitle: `QTY: ${number}`, 
    quantityListOpen: false,
    quantitySelected: number,
  })
}

toggleSizeList(){
  this.setState(prevState => ({
    sizeListOpen: !prevState.sizeListOpen
  }))
}

toggleQuantityList(){
  this.setState(prevState => ({
    quantityListOpen: !prevState.quantityListOpen
  }))
}

closeSize(){
  this.setState({
    sizeListOpen: false
  })
}

closeQuantity(){
  this.setState({
    quantityListOpen: false
  })
}
  render () {
    return (
      <div className={styles.dropdownContainer}>
        <div className={styles.sizeContainer}>
          <div className={styles.sizeHeader} onClick={() => this.toggleSizeList()}>
            <div className={styles.dropdownHeaderTitle}>{this.state.sizeTitle}</div>
              {this.state.sizeListOpen ? <div className={styles.angleUp}/> : <div className={styles.angleDown}/>}
          </div>
            {this.state.sizeListOpen && <ul className={styles.sizeList} onClick={e => e.stopPropagation()}>
            {this.state.sizes.map((size, i)=> (
              <Sizes size={size} id={i} key={i} selectSize={this.selectSize}/>
            ))}
          </ul>}
        </div>
        <div className={styles.quantityContainer}>
          <div className={styles.quantityHeader} onClick={() => this.toggleQuantityList()}>
            <div className={styles.dropdownHeaderTitle}>{this.state.quantityTitle}</div>
              {this.state.quantityListOpen ? <div className={styles.angleUp}/> : <div className={styles.angleDown}/>}
          </div>
            {this.state.quantityListOpen && <ul className={styles.quantityList} onClick={e => e.stopPropagation()}>
            {this.state.quantity.map((number, i)=> (
              <Quantity number={number} id={i} key={i} selectQuantity={this.selectQuantity}/>
            ))}
          </ul>}
        </div>
      </div>
    )
  }
}

export default DropDownMenus; 