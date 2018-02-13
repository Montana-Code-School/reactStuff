import React, { Component } from 'react';

//make a button and maybe have them click it... ordering
//order both the state and the render methods. have a button change state..

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      sumDumProp:true
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentWillMount(){
  
  }
  
  componentDidMount(){
  
  }
  
  componentWillReceiveProps(){
  
  }
  
  componentDidUpdate(){
  
  }
  
  shouldComponentUpdate(){
  
  }
  
  componentWillUpdate(){
  
  }
  
  handleClick(){
    this.setState({
      sumDumProp: !this.state.sumDumProp
    }); 
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>
          click me
        </button>
      </div>
    )
   });
}
