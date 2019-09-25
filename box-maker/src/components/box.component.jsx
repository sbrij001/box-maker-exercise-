import React from 'react';

class Box extends React.Component{
  handleClick = () => {
    this.props.remove(this.props.id)
  }
  render(){
    return(
      <div>
        <div style={{
          height: `${this.props.height}em`,
          width: `${this.props.width}em`,
          backgroundColor: this.props.color
        }}/>
        <button onClick={this.handleClick}>Remove</button>
      </div>
    )
  }
}
export default Box
