import React, { Component } from 'react';

//api key 4 l8tr = 3d6b633422451393e953dab4052ea0e4
//url 4 l8tr  - http://api.openweathermap.org/data/2.5/weather?q=Bozeman&appid= 

class WeatherComponent extends React.Component{
  
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        this is your weather component
      </div>   
      )
    }
}

export default WeatherComponent;

//First, make a componentDidMount method on your Weather class

//Now we need to make the api call. Grab your url from above and concatenate
//the url + api key and set that equal to a some variable in your construtor
//using the fetch API and the url you just build, fetch the data and console.log it


//nice! You guys just made an api call in react. Putting an api call in 
//component did mount is a good practice, as you'll probably need to 
//set some properties from the return call, and this way you can be certain
//that you have a working component in a valid state to play with.


//next, lets build a table that displays this data.

//but lets do it piecewise. First, lets just get the name
//of the city on the page. Due to the async nature
//of api calls, you'll have to use state. 

//we'll have two states - intializing (haven't got the data yet, waiting for the
//server response) and fulfilled (got our data and displaying it)

//step 1: set a state variable "data" equal to "loading..."
//step 2: inject that variable into your template. 
//step 3: after your api call is done, set the state.data equal 
// to the name of the city found in the data response

//Notice how very quickly the app renders "loading..." and then changes to the name
//of the city. woohoo!!!!

//Now, using this react doc https://reactjs.org/docs/conditional-rendering.html
//and everythind we learned yesterday, let's build this table!
//it should display: 
//  NAME OF CITY
// TEMP PRESSURE  HUMIDITY  DESCRIPTION


//finally, change the city name in the url string to different cities. 
//look at the fruit of your labor. 