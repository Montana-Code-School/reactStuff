
import React, { Component } from 'react';

//inject this component into your application. There are a couple bugs you need to fix. Use the compiler errors to 
//tackle them one at a time.
//look at the console logs when you click on the buttons - they are incorrect. 
//move the console logs to the proper lifecycle method to correctly reflect the
//state
//note: the first time you click it, it will work properly, but keep clicking and you'll see weird behavior
//the react docs might help with this. Particularly, any info about setState()

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
