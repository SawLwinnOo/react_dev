import React, { createRef, useState } from "react";

const Item = props =>{
      return(
            <div>
                  <li>{props.name}</li>
                  <li>{props.email}</li>
            </div>
      )
}



const State = props =>{

      let [data,setData] = React.useState([
            {id:1, name: "S", email: "s@gmail.com"},
            {id:2, name: "SL", email: "sl@gmail.com"},
      ])
      
      let nameref = createRef();
      let emailref = createRef();
      let add = () =>{
            let id = data.length +1
            

            let name = nameref.current.value;
            let email = emailref.current.value;
            setData([
                  ...data,
                  {id, name, email}
            ])
      }

      return (
            <div>
                  <h1>Hello SLO</h1>
                  <ul>
                        {data.map(i =>{
                              return (
                                    <Item key={i.id} name={i.name} email={i.email} />
                              )
                        })}
                  </ul>
                  <input type="text" ref={nameref} placeholder="Name"/><br/>
                  <input type="text" ref={emailref} placeholder="Email"/><br/>
                  <button onClick={add} >Add</button>
            </div>
      )
}
export default State;