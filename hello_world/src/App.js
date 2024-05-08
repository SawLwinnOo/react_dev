import React from 'react';
import Item from './components/props';
import State from './components/states';


class HelloWorld extends React.Component {
  

  render(){
    return (
      <div>
        <p>----Part of props & Hello World----</p>
        <h1>Hello World</h1>
          <ul>
            <Item name="SLO" email="slo@gmail.com"/>
          </ul><br/><br/>
        <p>-------Use Of State-------</p>
        <ul>
            <State/>
        </ul>
      </div>
    )
  }
}

export default HelloWorld;