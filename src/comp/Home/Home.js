import React from 'react';
import SlideImage from '../sharedCompunents/slideimage';
import Banner1 from "../../asset/main/1.jpg"
import Banner2 from "../../asset/main/2.jpg"
import Grid from './grid';
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colums: [
        {
          icon:"heart",
          title: "WALL REPAIR",
          Discription: "You have got things to do that are more important than cleaning a messy house"
        },
        {
          icon:"shop",
          title: "WALL REPAIR",
          Discription: "You have got things to do that are more important than cleaning a messy house"
        },
        {
          icon:"highlight",
          title: "WALL REPAIR",
          Discription: "You have got things to do that are more important than cleaning a messy house"
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <SlideImage bg1={Banner1} bg2={Banner2} />
        <Grid details={this.state.colums} />
      </div>
    )
  }
}
export default Home;


 