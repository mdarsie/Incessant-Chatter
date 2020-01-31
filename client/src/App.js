import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    patter: []
  };

  async componentDidMount() {
    try {
      const response = await axios.get("/api/v1/patter");
      this.setState({ patter: res.data });
    } catch (err) {
      console.log("failed to retrieve patter");
    }
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        {this.state.patter.map(patter => {
          return <div>{patter.content}</div>;
        })}
      </div>
    );
  }
}

export default App;
