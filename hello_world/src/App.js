import React from 'react';

class Item extends React.Component {

  render(){
    return (
      <div>
        <li>{this.props.name} {this.props.email}</li>
      </div>
    )
  }
}

class HelloWorld extends React.Component {

  render(){
    return (
      <div>
        <h1>Hello World</h1>
          <ul>
            <Item name="SLO"/>
            <Item email="slo@gmail.com"/>
          </ul>
      </div>
    )
  }
}

export default HelloWorld;