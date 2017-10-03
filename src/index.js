import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BarfTwo from "./Barf.js";
import App from "./App.js"
//Lets build yer first react component! Woo hoo!!!!!
//At it's essence a react 'component' is simply a
//function that has a render method that returns the following:
//(
//  <div>
//  </div>
//)

//that's it, really. So lets make one
//step 1: build a class, call it w/e you want
//step 2: make it a subclass of "React.Component"
//step 3: give it a render() method
//return that thing above, including the parentheses



//but we need to get this puppy working with the html. Below is a way to 
//inject a component into html
ReactDOM.render(< {Insert Class Here} />, document.getElementById());
//step 4: insert your class name where it says "insert class here". Find the index.html file
//and select an id to attach your react to.
//the second arg of ReactDOM.render is your familiar document.getElementById(). Use the id you just
//selected. 
//Your app should refresh itself - check it out, in theory you got a working react 
//component
