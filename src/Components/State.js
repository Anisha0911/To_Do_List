import React, { Component } from 'react'

export default class State extends Component {

constructor(){
    super();
    this.state = {
        Name : "Anisha",
        Email : "panisha@gmail.com",
        Designation : "Developer"
    }
}

componentDidMount(){
    console.log("similar like use effect")
}

  render() {
    // Either use Var / Let / Const -- All will work
    var changeState = () =>{
    this.setState({ Name : "Shreya Prajapati" })
    }

    return (
      <div>
        <h1>{this.state.Name}</h1>
        <h1>{this.state.Email},{this.state.Designation}</h1>
        {/* If we want to change the state thn we have to use setState */}
     
      {/*  1 - METHOD START 
      <button onClick={()=>this.setState({
        Name : "Shreya Prajapati"
        })}>Change State Button</button> 
        1 - METHOD END*/}


        <button onClick={changeState}>Change State using Function</button>
      </div>
    )
  }
}
