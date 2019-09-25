import React from 'react';
import Box from './box.component';
import NewBoxForm from './new-box-form.component';

class BoxList extends React.Component {
  state = {
    boxes: []
  }

  create = (newBox) => {
    this.setState({
      boxes: [...this.state.boxes, newBox]
    })
  }
  render(){
    const boxes = this.state.boxes.map(box => (
      <Box
        width={box.width}
        height={box.height}
        color={box.color}
      />
    ))
    return(
      <div>
        <h1>Color Box Maker</h1>
        <NewBoxForm createBox={this.create}/>
        {boxes}
      </div>
    )
  }
}
export default BoxList;
