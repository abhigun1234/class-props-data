import React, { Component } from 'react'

export default class PropsClassDemo extends Component {
    constructor(props){
        console.log("props",props)
        super(props)
        this.state={message:'abhishek'}
      
    }
   changeName(name){
  this.setState({message:'hello abhishek'})
   }
    render() {
        return (
            <div>
             <h1>{this.state.message}</h1>   
             <button onClick={()=>this.changeName("ram")}>change name</button>
            </div>
        )
    }
}
