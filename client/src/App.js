import React from "react";
import axios from 'axios';
import "./App.css";

class App extends React.Component {
  
  componentDidMount(){
    axios.get('/api/v1/patter')
    .then((res) => {
      console.log(res.data)
    })
  }
  
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
