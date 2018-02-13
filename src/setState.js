
import React, { Component } from 'react';

//inject this component into your application. 
//look at the console logs when you click on the buttons - they are incorrent. 
//move the console logs to the proper lifecycle method to correctly reflect the
//state

export default class LightSwitch{

  constructor(){
    this.state = {
      lightsOn:true
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleOffButtonClick(){
    this.setState({
      lightsOn:false
    });
    console.log('state: ' + this.state.lightsOn);
  }

  handlenOnButtonClick(){
    this.setState({
      lightsOn: true
    });
    console.log('state: ' + this.state.lightsOn);
  }

  render(){
    return(
      <div>
        <button onClick={this.handleOnButtonClick}>
          On
        </button>
        <button onClick={this.handleOffButtonClick}>
          Off
        </button>
      </div>
    );
  }
}
