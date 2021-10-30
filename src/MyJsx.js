import React, { Component } from 'react'

export default class MyJsx extends Component {

    constructor(props){
        super(props)
            console.log("props",props)
    }
    render() {
        //jsx
        return (
            <div>
             {this.props.name}
             <p></p>
             {this.props.address}
            </div>
        )
    }
}
