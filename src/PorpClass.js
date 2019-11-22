import React,{Component} from "react";

class PorpClass extends Component{
   render(){
       return(
           <div>
               <h1>Hello, {this.props.name}</h1>
               <h2>Roll No: {this.props.roll}</h2>
           </div>
       );
   } 
}

export default PorpClass;