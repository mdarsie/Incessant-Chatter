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
      this.setState({ patter: response.data });
    } catch (err) {
      console.log("failed to retrieve patter");
    }
  }

  render() {
    return (
      <div>
        <h1>Incessant Chatter</h1>
        <div>
            <textarea class='new-patter-input' placeholder='Who cares?'/>
            <button>Patter</button>
        {this.state.patter.map(patter => {
          return <div>{patter.content}</div>;
        })}
      </div>
    );
  }
}

export default App;
