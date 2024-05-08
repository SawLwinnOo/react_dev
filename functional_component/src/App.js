import React from 'react';


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
      </ul>
    </div>
  )
}

export default hello_world;