import React from "react";
import axios from "axios";
import Card from "../Card";
const baseUrl = "https://rest.bandsintown.com";
const app_id = "000";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchArtist: "",
      ArtistData: [],
      EventArtistData: [],
      visible: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ searchArtist: event.target.value });
  }
  handleSubmit(event) {
    //alert("A name was submitted: " + this.state.searchArtist);
    this.getArtistMetaData(this.state.searchArtist);
    this.getEventMetaData(this.state.searchArtist);
    event.preventDefault();
  }
  getArtistMetaData(artist) {
    axios
      .get(`${baseUrl}/artists/${artist}`, {
        params: {
          app_id,
        },
      })
      .then((res) => {
        if (res.data.length !== 0) {
          this.setState((previousState) => ({
            ArtistData: [...previousState.ArtistData, res.data],
          }));
        }
        if (this.state.ArtistData.length > 0) {
          this.setState({ visible: true });
        }
      })

      .catch((error) => {
        console.log(error);
      });
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
          this.setState((previousState) => ({
            EventArtistData: [...previousState.EventArtistData, res.data],
          }));
        }
      })

      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        {console.log(this.state.ArtistData)}
        {console.log(this.state.EventArtistData)}

        <nav className="navbar navbar-dark bg-primary">
          <form className="container-md" onSubmit={this.handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                onChange={this.handleChange}
                className="form-control"
                placeholder="Enter Artist Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <input type="submit" value="Submit" />
            </div>
          </form>
        </nav>
        <div className="row mt-20">
          {this.state.visible ? (
            <>
              {this.state.ArtistData.map((artist, index) => {
                return (
                  <div className="col-3" key={index}>
                    <Card artist={artist.name} srcImage={artist.image_url} />
                  </div>
                );
              })}
            </>
          ) : (
            <div className="col-12">
              <h2 style={{ textAlign: "center", marginTop: "20px" }}>
                Please search for an artist to get results
              </h2>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Home;
