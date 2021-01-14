import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";
import fbIcon from "../../images/fb.png";
import Moment from "react-moment";
const baseUrl = "https://rest.bandsintown.com";
const app_id = "000";

export default class ArtistProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.location.myCustomProps.name,
      url: this.props.location.myCustomProps.url,
      fbUrl: this.props.location.myCustomProps.fbUrl,
      descriptions: "",
      venue: {},
      Eurl: "",
      date: "",
    };
    this.getEventMetaData(this.state.name);
  }
  getEventMetaData(artist) {
    axios
      .get(`${baseUrl}/artists/${artist}/events`, {
        params: {
          app_id,
          date: "upcoming",
        },
      })
      .then((res) => {
        if (res.data.length !== 0) {
          this.setState({
            description: res.data[0].description,
            date: res.data[0].datetime,
            venue: res.data[0].venue,
            Eurl: res.data[0].url,
          });
        }
      });
  }

  render() {
    return (
      <div className="cont_style container">
        <div className="card">
          <div className="card-image">
            <img style={{ width: "35%" }} src={this.state.url} alt="" />
          </div>
          <div className="card-text">
            <h2>{this.state.name}</h2>
            <h3>{this.state.description}</h3>
            <a href={this.state.fbUrl}>
              <img src={fbIcon} className="fb" alt="" />
            </a>
            <p>
              {" "}
              <Moment>{this.state.date}</Moment>
            </p>
          </div>
          <div className="card-stats">
            <div className="stat">
              <h2>Venue</h2>
              <div className="value"> {this.state.venue.name}</div>
            </div>
            <div className="stat border">
              <h2>City</h2>

              <div className="value">{this.state.venue.city}</div>
            </div>
            <div className="stat">
              <h2>Country</h2>

              <div className="value">{this.state.venue.country}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
