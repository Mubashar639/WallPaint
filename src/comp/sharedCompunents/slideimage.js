import { Carousel } from 'antd';
import React from 'react';

class SlideImage extends React.Component{

 onChange(a, b, c) {
        console.log(a, b, c);
      }
    render(){
   const {bg1,bg2} = this.props
      return(
      <Carousel  autoplay afterChange={this.onChange}>
    <div><img  className="frontBanner" src={bg1} alt="slow connection" /> </div>
    <div> <img className="frontBanner" src={bg2} alt="slow connection" /> </div>

  </Carousel>)
    }
}

export default SlideImage;