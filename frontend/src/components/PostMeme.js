import React, { Component } from "react";
import { PostMemeAsync } from "../store/slices/memeSlice";
import { connect } from "react-redux";
class PostMeme extends Component {
  state = {
    name: "",
    url: "",
    caption: "",
  };
  handlePostMeme = () => {
    this.props.PostMemeAsync(this.state);
  };

  render() {
    return (
      <div>
        <form>
          <label>caption:</label>
          <br />
          <input
            type="text"
            name="caption"
            value={this.state.caption}
            onChange={(e) => this.setState({ caption: e.target.value })}
          />
          <br />
          <label>URL:</label>
          <br />
          <input
            type="text"
            id="url"
            name="url"
            value={this.state.url}
            onChange={(e) => this.setState({ url: e.target.value })}
          />
          <br />
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </form>
        <button onClick={() => this.handlePostMeme()}>Post Meme</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { memeList } = state.meme;
  return { memeList };
};

export default connect(mapStateToProps, { PostMemeAsync })(PostMeme);
