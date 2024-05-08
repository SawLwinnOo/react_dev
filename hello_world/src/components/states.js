import React from "react";
import Item from "./props";

class State extends React.Component{
      state = {
            items: [
                  {id:1, name: "SlO", email: "slo@gmail.com"},
                  {id:2, name: "Saw", email: "saw@gmail.com"}
            ]
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
                                                      <Item name={i.name}/>
                                                      <Item name={i.email}/>
                                                </div>
                                          )
                                    })
                              }
                        </ul>
                  </div>
            )
      }

}
export default State;