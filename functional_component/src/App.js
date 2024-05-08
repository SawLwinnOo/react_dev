import React from 'react';
import State from './components/state';

// in functional component props must be an argument
let Item = (props)=>{
  return(
    <div>
      <li>{props.name}</li>
      <li>{props.email}</li>
    </div>
  )
}

let hello_world = () =>{

  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        <Item  name="SLO" email="slo@gmail.com" />
      </ul><br/>
      <p>----------------------</p><br/>
      <p>use state</p>
      <State/>
    </div>
  )
}

export default hello_world;