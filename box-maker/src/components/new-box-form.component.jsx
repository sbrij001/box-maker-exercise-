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

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createBox(this.state)
    this.setState({
      height:"",
      width: "",
      color: ""
    })
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
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
            <label htmlFor="height">Height</label>
            <input
              type="text"
              name="height"
              value={this.state.height}
              id="height"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="color">Background Color</label>
            <input
              type="text"
              name="color"
              value={this.state.color}
              onChange={this.handleChange}
            />
          </div>
          <button>Add New Box</button>
        </form>
      </div>
    )
  }
}
export default NewBoxForm;
