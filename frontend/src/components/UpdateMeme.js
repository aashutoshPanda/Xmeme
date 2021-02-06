import React, { Component } from "react";
import { UpdateMemeAsync } from "../store/slices/memeSlice";
import { connect } from "react-redux";
class UpdateMeme extends Component {
  state = {
    id: this.props.memeToUpdate.id,
    caption: this.props.memeToUpdate.caption,
    url: this.props.memeToUpdate.url,
    name: this.props.memeToUpdate.name,
  };
  handleUpdateMeme = () => {
    this.props.UpdateMemeAsync(this.state);
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        this is updateMeme actually
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
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </form>
        <button onClick={() => this.handleUpdateMeme()}>Update meme</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { memeToUpdate } = state.meme;
  return { memeToUpdate };
};

export default connect(mapStateToProps, { UpdateMemeAsync })(UpdateMeme);
