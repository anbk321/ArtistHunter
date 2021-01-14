import React from "react";
import { Link } from "react-router-dom";

export default class ArtistCard extends React.Component {
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
          <Link
            to={{
              pathname: "/artist",
              myCustomProps: {
                name: this.props.artist,
                url: this.props.srcImage,
                fbUrl: this.props.fbUrl,
              },
            }}
          >
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    );
  }
}
