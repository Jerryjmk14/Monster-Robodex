import { Component } from "react";
import "./Search.css";

export default class Search extends Component {
  render() {
    const { onSearch } = this.props;
    return (
      <input
        type="search"
        className={`search-input ${this.props.className}`}
        placeholder={this.props.placeHolder}
        onChange={onSearch}
      />
    );
  }
}
