import React from "react";
import { Link } from "react-router-dom";

export default class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={this.props.srcImage}
          alt={this.props.altImg}
        />
        <div className="card-body">
          <h4 className="card-title">{this.props.artist}</h4>
          <p className="card-text">{this.props.description}</p>
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    );
  }
}
