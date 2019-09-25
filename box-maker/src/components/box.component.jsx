import React from 'react';

class Box extends React.Component{
  render(){
    return(
      <div>
        <div style={{
          height: `${this.props.height}em`,
          width: `${this.props.width}em`,
          backgroundColor: this.props.color
        }}/>
        <button>Remove</button>
      </div>
    )
  }
}
export default Box
