import React from "react";
import Item from "./props";

class State extends React.Component{
      state = {
            items: [
                  {id:1, name: "SlO", email: "slo@gmail.com"},
                  {id:2, name: "Saw", email: "saw@gmail.com"},
                  {id:3, name: "Saw Liwin", email: "sawlwin@gmail.com"},
            ]

          }
      nameref = React.createRef();
      emailref = React.createRef();

      add = ()=>{
            let id = this.state.items.length+1;
            let name = this.nameref.current.value;
            let email = this.emailref.current.value;
            this.setState({
                  items: [
                        ...this.state.items,
                        {id, name, email}
                  ]
            })
      }

      render(){
            return(
                  <div>
                        <h1>Hello SLO</h1>
                        <ul>
                              {
                                    this.state.items.map(i =>{
                                          return(
                                                <div>
                                                      <Item key={i.id} name={i.name} email={i.email}/>
                                                </div>
                                          )
                                    })
                              }
                        </ul>
                        <input name="Name" type="text" ref={this.nameref} placeholder="Enter Name"/><br/>
                        <input name="Email" type="text" ref={this.emailref} placeholder="Enter Email"/><br/>
                        <button onClick={this.add}>Add</button>
                  </div>
            )
      }

}
export default State;