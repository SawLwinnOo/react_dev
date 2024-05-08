import React from "react";

class Item extends React.Component{
      render(){
            return(
                  <div>
                        <li> name : {this.props.name}</li>
                        <li> email : {this.props.email}</li>
                  </div>
            );
      }
}

export default Item;