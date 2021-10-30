import React, { Component } from 'react'

export default class MyJsx extends Component {

    constructor(props){
        super(props)
            console.log("props",props)
    }
    callMe(name,address){
        console.log("hello",name)
        console.log("hello",address)
    }
    render() {
        //jsx
        return (
            <div>
             {this.props.name}
             <p></p>
             {this.props.address}
             {/* <button onClick={()=>this.callMe('neha','bhopal')}>clllMe</button> */}
             {/* <button onClick={this.callMe}></button> */}
            </div>
        )
    }
}
