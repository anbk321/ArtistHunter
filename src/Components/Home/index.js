import React from "react";
import axios from "axios";
import ArtistCard from "../ArtistCard";
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
      message: "Please search for an artist to get results",
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
        this.setState({ message: "Please connect to the internet!" });
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
                    <ArtistCard
                      artist={artist.name}
                      srcImage={artist.image_url}
                      fbUrl={artist.facebook_page_url}
                    />
                  </div>
                );
              })}
            </>
          ) : (
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3
                    style={{
                      textAlign: "center",
                      marginTop: "20px",
                      color: "",
                    }}
                  >
                    {this.state.message}
                  </h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Home;
