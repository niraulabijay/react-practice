import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Student from "./Student";
import Teacher from "./Teacher";
import Repeat from "./Abstract";
import el from "./NewApp";

import PorpClass from "./PorpClass";

// let el=<h1>hello</h1>;
// let el = React.createElement('h1',null,'hello');

// ReactDOM.render(<App/>,document.getElementById("root"));
// ReactDOM.render(<Student name="Ram"/>,document.getElementById("root"));

// ReactDOM.render(<Repeat/>,document.getElementById("root"));

// ReactDOM.render(el,document.getElementById("root"));

ReactDOM.render(<PorpClass name="Ram" roll={10+2}/>,document.getElementById("root"));