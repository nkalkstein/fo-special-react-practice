import React, { Component } from 'react';
import PointsRemaining from './points-remaining'
import Category from './category'
import specialData from './special-data'


class AppBox extends Component {
	state = {
	  categories: specialData,
	  remainingPoints: 28
	}

subtractRemainingPoint = () => {
	if (this.state.remainingPoints > 0){
	this.setState({
	remainingPoints: this.state.remainingPoints - 1
 })
 }
}

addRemainingPoint = () => {
	if (this.state.remainingPoints < 28){
	this.setState({
	remainingPoints: this.state.remainingPoints + 1
 })
}
}



  render() {
  	  const allCategories = this.state.categories.map((category, idx) => {
            return <Category key={idx} name={category.name} points={category.points} remainingPoints={this.state.remainingPoints} subtractRemainingPoint={this.subtractRemainingPoint} addRemainingPoints={this.addRemainingPoint}/>
          })
    return (
      <div>
      <div className="data"></div>
      {allCategories}
      <PointsRemaining remainingPoints = {this.state.remainingPoints}/>
      </div>
    );
  }
}

export default AppBox;