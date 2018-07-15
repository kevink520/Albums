import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

export default class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      albumCovers: [],
    };
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        const data = response.data;
        this.setState({
          albums: data,
        });

        // Get album covers from last.fm
        axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=taylor+swift&api_key=9bddf669543ed14dbb8de35c51a1c272&format=json`)
          .then(response => {
            const albumCovers = response.data.topalbums.album.reduce((obj, album) => {
              obj[album.name] = album.image[3]['#text'];
              return obj;
            }, {});

            this.setState({
              albumCovers: albumCovers,
            });
          });
      });
  }

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetails key={album.title} album={album} albumCover={this.state.albumCovers[album.title]} />);
  }
  
  render() {
    return (
      <ScrollView style={styles.albumList}>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  albumList: {
    marginRight: 15,
    marginBottom: 15,
    marginLeft: 15,
  },
});

