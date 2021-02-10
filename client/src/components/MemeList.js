import React, { Component } from "react";
import { getMemesAsync, setMemeToUpdate } from "../store/slices/memeSlice";
import { connect } from "react-redux";

class MemeList extends Component {
  componentDidMount() {
    this.props.getMemesAsync();
  }
  handleUpdate = (memeToUpdate) => {
    console.log("we need to update meme with id", memeToUpdate);
    this.props.setMemeToUpdate(memeToUpdate);
    console.log("full props", this.props);
    this.props.history.push("/update");
  };
  render() {
    console.log("in render", this.props.memeList);
    const memeListItems = this.props.memeList.map((ele) => {
      return (
        <li key={ele.id}>
          <p>Caption: {ele.caption}</p>
          <p>url: {ele.url}</p>
          <p>name: {ele.name}</p>
          <button onClick={() => this.handleUpdate(ele)}>update me </button>
        </li>
      );
    });
    return (
      <div>
        HI this is the complete MemeList
        <ul>{memeListItems}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { memeList } = state.meme;
  return { memeList };
};

export default connect(mapStateToProps, { getMemesAsync, setMemeToUpdate })(
  MemeList
);
