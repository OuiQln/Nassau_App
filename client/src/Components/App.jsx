import React from 'react';
import axios from 'axios';
import classNames from 'classnames';
import $ from 'jquery';
import {CSSTransition} from 'react-transition-group'; 

import sampleData from '../sampleData.js';
import BreadCrumb from './BreadCrumb.jsx';
import PhotoCarousel from './PhotoCarousel.jsx';
import MainPhoto from './MainPhoto.jsx'
import DescriptionContainer from './DescriptionContainer.jsx';
import SizeModal from './SizeModal.jsx';
import styles from '../../dist/styles/app.css'

class App extends React.Component {
  constructor (props){
    super (props) 
    this.state = {
      id: null,
      breadcrumbs: [], 
      name: sampleData[0].name,
      sku: sampleData[0].sku,
      stars: sampleData[0].stars,
      reviews: sampleData[0].reviews,
      price: sampleData[0].price,
      colors: sampleData[0].colors,
      colorNames: sampleData[0].colorNames,
      sizes: sampleData[0].sizes, 
      details: sampleData[0].details, 
      material: sampleData[0].material, 
      care: sampleData[0].care, 
      photos: sampleData[0].pictures,
      firstDisplay: null,
      lastDisplay: null,
      displayPhotos: [],
      selectedIndex: null,
      displayPhoto: [],
      backgroundPosition: '0% 0%',
      direction: '',
      sizeModal: false,
      findStore: false,
    }
    this.fillCarousel = this.fillCarousel.bind(this);
    this.upButton = this.upButton.bind(this);
    this.downButton = this.downButton.bind(this);
    this.photoClick = this.photoClick.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.getItem = this.getItem.bind(this);
    this.openSizeModal = this.openSizeModal.bind(this)
    this.toggleSizeModal = this.toggleSizeModal.bind(this);
    this.toggleStore = this.toggleStore.bind(this);
    this.colorProductClick = this.colorProductClick.bind(this);
  }

  componentDidMount() {
    let getIndex = Math.floor(Math.random() * 8)
    console.log (getIndex)
    this.getItem(getIndex)
  }

  getItem (id) {
    axios
      .get(`/api/ouiqln/items/${id}`)
      .then(({data}) => {
        this.setState ({
          id: data.id,
          breadcrumbs: data.breadcrumbs, 
          name: data.name,
          sku: data.sku,
          stars: data.stars,
          reviews: data.reviews,
          price: data.price,
          colors: data.colors,
          colorNames: data.colorNames,
          sizes: data.sizes, 
          details: data.details, 
          material: data.material, 
          care: data.care, 
          photos: data.pictures,
          displayPhoto: data.pictures[0],
        })
      })
      .then (response => {
        this.fillCarousel()
      })
      .catch (error => console.log('error', error))
  }

  fillCarousel() {
    let display = []
    let first = 0;
    let last 
    this.state.photos.map((photo, i) =>{
      if (display.length < 6) {
        display.push(photo);
      }
    })
    if (this.state.photos.length > 6) {
      last = 6
    }
    this.setState({
      firstDisplay: first,
      lastDisplay: last,
      displayPhotos: display,
      displayPhoto: display[0],
    })
  }

  upButton() {
    let display = [];
    if (this.state.firstDisplay > 0) {
      for (let i = this.state.firstDisplay - 1; i < this.state.lastDisplay - 1; i++) {
        display.push(this.state.photos[i])
      }
      this.setState ({
        firstDisplay: this.state.firstDisplay -1,
        lastDisplay: this.state.lastDisplay - 1,
        displayPhotos: display, 
        direction: 'up', 
      })
    }
  }

  photoClick(index) {
    console.log (index)
    this.setState({
      selectedIndex: index,
      displayPhoto: this.state.displayPhotos[index],
    })
  }

  colorProductClick (index) {
    let color = this.state.photos.length-1-index
    this.setState ({
      displayPhoto: this.state.photos[color]
    })
  }

  downButton() {
    let display = []
    if (this.state.photos.length > this.state.lastDisplay) {
      for (let i = this.state.firstDisplay + 1; i < this.state.lastDisplay + 1; i++) {
        display.push(this.state.photos[i])
      }
      this.setState ({
        firstDisplay: this.state.firstDisplay + 1,
        lastDisplay: this.state.lastDisplay + 1,
        displayPhotos: display,
        direction: 'down', 
      })
    }
  }

  handleMouseMove (e) {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    this.setState({ backgroundPosition: `${x}% ${y}%` })
  }

  toggleSizeModal () {
    this.setState(prevState => ({
      sizeModal: !prevState.sizeModal
    }))
  }

  toggleStore () {
    this.setState(prevState => ({
      findStore: !prevState.findStore
    }))
  }

  openSizeModal () {
    let modal = document.getElementsByClassName(styles.sizeModal)
    modal.style.display = 'block'
  }

  render () {
    return (
      <div>

        <div>
          <BreadCrumb breadcrumbs={this.state.breadcrumbs}/> 
        </div>

        <br/>
        <br/>

        <div className={classNames(styles.appContainer)}>

          <div className={styles.photoIconContainer}>
            <div className="photoCarousel" className="carouselContainer">
              <span className={styles.chevron}>
                <i className="fas fa-chevron-up" onClick={()=>this.upButton()}></i>
              </span>
                {/* <CSSTransition classNames={this.state.direction} timeout={1000} timeout={1000}> */}
                  <div className="photoSlider">
                    {this.state.displayPhotos.map((photo, i) => {
                      return (
                        <PhotoCarousel photo={photo} index={i} key={i} isSelected={this.state.selectedIndex === i} photoClick={this.photoClick}/>
                      )})}
                  </div>
                {/* </CSSTransition> */}
              <span className={styles.chevron}>
                <i className="fas fa-chevron-down" onClick={()=>this.downButton()}></i>
              </span>
            </div>
          </div>
        
          <div className={styles.root}>
            <MainPhoto displayPhoto={this.state.displayPhoto} handleMouseMove={this.handleMouseMove} 
            backgroundPosition={this.state.backgroundPosition}/>
          </div> 

          <div>
            <DescriptionContainer productName={this.state.name}
            toggleSizeModal={this.toggleSizeModal}
            findStore={this.state.findStore}
            toggleStore={this.toggleStore}
            sku={this.state.sku} 
            stars={this.state.stars} reviews={this.state.reviews}
            price={this.state.price}
            colorProductClick={this.colorProductClick}
            photo={this.state.photo} displayPhotos={this.state.displayPhotos}
            colors={this.state.colors} colorNames={this.state.colorNames}
            sizes={this.state.sizes}
            details={this.state.details} material={this.state.material} care={this.state.care}/>
          </div>

        </div>
        {this.state.sizeModal ? <SizeModal toggleSizeModal={this.toggleSizeModal}/> : null}

      </div>
    )
  }
}

export default App; 