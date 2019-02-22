import React from 'react';
import axios from 'axios';
import classNames from 'classnames';
import $ from 'jquery';
import {CSSTransition} from 'react-transition-group'; 

import sampleData from '../sampleData.js';
import BreadCrumb from './BreadCrumb.jsx';
import PhotoCarousel from './PhotoCarousel.jsx';
import MainPhoto from './MainPhoto.jsx'
import DescriptionContainer from './DescriptionContainer.jsx'

class App extends React.Component {
  constructor (props){
    super (props) 
    this.state = {
      id: sampleData[0].id, 
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
      displayPhoto: sampleData[0].pictures[0],
      backgroundPosition: '0% 0%',
      direction: '', 
    }
    this.fillCarousel = this.fillCarousel.bind(this);
    this.upButton = this.upButton.bind(this);
    this.downButton = this.downButton.bind(this);
    this.photoClick = this.photoClick.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount() {
    this.fillCarousel();
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

  render () {
    return (
      <div>

        <div>
          <BreadCrumb/> 
        </div>

        <br/>
        <br/>

        <div className="AppContainer">

          <div className="photo-icon-container">
            <div className="PhotoCarousel" className="CarouselContainer">
              <span id="chevron">
                <i className="fas fa-chevron-up" onClick={()=>this.upButton()}></i>
              </span>
                <CSSTransition classNames={this.state.direction} timeout={1000} timeout={1000}>
                  <div className="photoSlider">
                    {this.state.displayPhotos.map((photo, i) => {
                      return (
                        <PhotoCarousel photo={photo} index={i} key={i} isSelected={this.state.selectedIndex === i} photoClick={this.photoClick}/>
                      )})}
                  </div>
                </CSSTransition>
              <span id="chevron">
                <i className="fas fa-chevron-down" onClick={()=>this.downButton()}></i>
              </span>
            </div>
          </div>
        
          <div id="root">
            <MainPhoto displayPhoto={this.state.displayPhoto} handleMouseMove={this.handleMouseMove} 
            backgroundPosition={this.state.backgroundPosition}/>
          </div> 

          <div>
            <DescriptionContainer productName={this.state.name}
            sku={this.state.sku} 
            stars={this.state.stars} reviews={this.state.reviews}
            price={this.state.price}
            colors={this.state.colors} colorNames={this.state.colorNames}
            sizes={this.state.sizes}
            details={this.state.details} material={this.state.material}/>
          </div>

        </div>

      </div>
    )
  }
}

export default App; 