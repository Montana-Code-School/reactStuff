import React, { Component } from 'react';

//inject this component into your application
//then, put a console log an integer in each
//lifecycle method that correctly sequences
//the timing of each event i.e 1 = first lifecycle method getting called
// 2 = second lifecycle method getting called and so forth
//there are TWO distinct lifecyce methods - the initial rendering
//and an updated state. You'll have to play around with them to figure out which
//one corresponds to which one. Render() doesn't need to console log an int. you can just
//console log "render method called"

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
