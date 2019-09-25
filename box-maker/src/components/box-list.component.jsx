import React from 'react';
import Box from './box.component';

class BoxList extends React.Component {
  state = {
    boxes: [{width:10, height: 40, color: "red"}]
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
        {boxes}
      </div>
    )
  }
}
export default BoxList;
