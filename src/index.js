import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Home extends Component {
  state={
    firstName:'',
    lastName:'',
    isValid:false,
    counter:0,
  }

  logFields = () => {
    const {firstName,lastName} =this.state;
    console.log('full name: ',`${firstName} ${lastName}`);
  }

  handleFormChange =(e)=>{
    const {name, value} = e.target;
    this.setState({
      [name]:value,
    },()=>{this.logFields();});
    this.handleCounter();
    
  }

  handleCounter=()=>{
    this.setState({
      counter:this.state.counter+1
    });
  }

  toggleKey=key=>state=>{
    return{
      [key]:!state[key]
    }
  }

  handleIsValid = () => {
    this.setState(this.toggleKey('isValid'));
    this.handleCounter();
  }

  render(){
    return (
      <div className="">
        <div className="show-area">
          <h3>User Info(for setState)</h3>
          <div>First Name:{this.state.firstName}</div>
          <div>Last Name:{this.state.lastName}</div>
          <div>The info is Valid?:{this.state.isValid?'yes':'false'}</div>
          <div>State changes counter:{this.state.counter}</div>
          <hr/>
        </div>
        <div className="input-area">
          <h5>Form Demo(setState)</h5>
          <div className="form-group">
            <label for="firstName">First Name:</label>
            <input className="" type="text" name="firstName" onChange={this.handleFormChange}/><br/>
            <label for="lastName">Last Name:</label>
            <input className="" type="text" name="lastName" onChange={this.handleFormChange}/><br/>
            {/* <label for="isValid">The info is valid:</label> */}
            <input className="" type="button" name="isValid" value="Invalidate" onClick={this.handleIsValid}></input>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Home/>, document.querySelector("#root"));