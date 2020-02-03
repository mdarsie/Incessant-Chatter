import React from "react";
import axios from "axios";
import "./App.css";
import Patter from "./components/Patter";

class App extends React.Component {
  state = {
    patters: [],
    newPatter: {
      content: "",
      image_url: "",
      user: 1
    }
  };

  async componentDidMount() {
    try {
      const res = await axios.get("/api/v1/patter");
      this.setState({ patters: res.data });
    } catch (err) {
      console.log("Failed to retrieve data");
    }
  }

  onNewPatterChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    const newState = { ...this.state };

    newState.newPatter[name] = value;

    this.setState(newState);
  };

  onNewPatter = () => {
    axios.post("/api/v1/patter", this.state.newPatter);
  };

  render() {
    return (
      <div>
        <h1>INCESSANT CHATTER</h1>
        <div>
          <textarea
            className="create-patter-text"
            placeholder="What's Happening"
            name="content"
            onChange={this.onNewPatterChange}
            value={this.state.newPatter.content}
          />

          <input
            type="text"
            placeholder="Image URL"
            name="image_url"
            onChange={this.onNewPatterChange}
            value={this.state.newPatter.image_url}
          />

          <button onClick={this.onNewPatter}>Patter</button>

        </div>
        {this.state.patters.map(patter => {
          return (
            <Patter
              picture_url={patter.user.picture_url}
              name={patter.user.name}
              handle={patter.user.handle}
              likes={patter.likes.length}
              content={patter.content}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
