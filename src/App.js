import logo from './logo.svg';
import './App.css';
import Jsxdemo from './Jsxdemo';
import React from 'react';
import Propsdemo from './Propsdemo';
import PropsClassDemo from './PropsClassDemo';
import MyJsx from './MyJsx';

function App() {
//   // return (
//   //   <div className="App">
//   //     <Jsxdemo></Jsxdemo>
//   //   </div>
//   // );
//  // return React.createElement('div',{id:'mname',class:'mnamec'},React.createElement('div',null,React.createElement('h1',null,'Abhishek')))
// return  <div><Propsdemo  name="ravi">
//   <p>Hello</p>
//   </Propsdemo>
//   <PropsClassDemo myname="raj"></PropsClassDemo>
//   </div>
  return(<div><MyJsx name="raj" address='rampur'></MyJsx>
  <MyJsx name="rahul" address='ranchi'></MyJsx>
  </div>)
}

export default App;
