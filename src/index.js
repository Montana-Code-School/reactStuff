import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//First, we need to get our application injected into an html page
//create-react-app does this for you by default, but it's good to know
//how it works. You might need to customize it some day. 


//step1: import the App from App.js, and put the imported variable into
//the curly brackets below where it says "Insert Class Here"

//step2: find your index.html file (it was built from create-react-app), select
//an id on an element, and pass it as a string into getElementById below

ReactDOM.render(< {Insert Class Here} />, document.getElementById());

//Check out the App. Hopefully, you at least have a different error message
//You can pass in whatever component you want to. By default, create-react-app 
//passes the App component as your entry point. Keep in mind, you typically
//won't run ReactDOM.render any other time - it's only used to inject your 
//WHOLE APP (not a component) into html

