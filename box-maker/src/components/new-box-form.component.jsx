import React from 'react';

class NewBoxForm extends React.Component {
  state={
    height:"",
    width: "",
    color: ""
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render(){
    return(
      <div>
        <form>
          <div>
            <label htmlFor="width">Width</label>
            <input
              type="text"
              name="width"
              value={this.state.width}
              id="width"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Height</label>
            <input type="text" value={null} onChange={null}/>
          </div>
          <div>
            <label>Background Color</label>
            <input type="text" value={null} onChange={null}/>
          </div>
        </form>
      </div>
    )
  }
}
export default NewBoxForm;
