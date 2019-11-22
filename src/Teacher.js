import React,{Component} from "react"

class Teacher extends Component {
    render(){
        return <h2>hello {this.props.name}</h2>;
    }
}
export default Teacher;