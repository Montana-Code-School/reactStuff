//A common thing you'll have to do is something called "lifting the state." 

//It's a side effect of two things - 

//  1. you can pass down props through componentss
//  2. you want to minimize the amount of api calls you make
  
//So here's a scenario: You hit an API, let's say openWeather, and you render a table of temps and humidity. You do all of this within one component.
//Then, your boss comes to you and congratulates you on the beautiful table, but she wants you to use that same data 
//in another component in a different component, that displays the wind. 

//You're stuck with having the data in one component but you need it in another. What you can do is "lift the state" where
//you create a parent component, and pass down those props into both of your components where you need it.



//step 1. make a component that renders a table of city and temp with the OpenWeather API.
//step 2. make a component that just displays the wind speed and direction. 
//step 3. place both of these components in a new parent component and move the API call into the parent, passing down
// the data into both of them through this.props.
