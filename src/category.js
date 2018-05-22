import React from 'react'
import specialData from './special-data'
import AppBox from './AppBox'
import PointsRemaining from './points-remaining'


class Category extends React.Component {
  state = {
    name: this.props.name,
    points: this.props.points

  }




addPoint = () => {
    if (this.state.points < 10 && this.props.remainingPoints > 0){
    this.setState({
    points: this.state.points + 1,
  })
   this.props.subtractRemainingPoint()
  }
}

subtractPoint = () => {
  if (this.state.points > 0 && this.props.remainingPoints < 28){
  this.setState({
    points: this.state.points - 1,
  })
  this.props.addRemainingPoints()
 }
}

  render(){
    return(
    <div className="category-box">
      <div className="category-background">
        <div className="category-name">{this.state.name}</div>
        <div className="arrow-container">
          <i className="fas fa-arrow-left arrow" onClick={this.subtractPoint}></i>
          <div className="category-value">{this.state.points}</div>
          <i className="fas fa-arrow-right arrow" onClick={this.addPoint}></i>
        </div>
      </div>
    </div>
  
  )
  }
}

export default Category
