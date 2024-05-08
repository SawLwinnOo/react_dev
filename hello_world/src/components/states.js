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

      add = ()=>{
            let id = this.state.items.length+1;
            this.setState({
                  items: [
                        ...this.state.items,
                        {id, name: "Saw Lwin Oo", email: "sawlwinoo@gmail.com"}
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
                        <button onClick={this.add}>Add</button>
                  </div>
            )
      }

}
export default State;