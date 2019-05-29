import React, { Component } from 'react';
import ErrorMessage from './errorMessage';
import InstaService from './../services/instaservice';

class Palette extends Component {
  InstaService = new InstaService();
  state = {
    photos: [],
    error: false
  };

  componentDidMount() {
    this.updatePhotos();
  }

  updatePhotos() {
    this.InstaService.getAllPhotos()
      .then(this.onPhotosLoaded)
      .catch(this.onError);
  }

  onPhotosLoaded = photos => {
    this.setState({ photos });
  };

  onError = err => {
    this.setState({ error: true });
  };

  renderItems(arr) {
    return arr.map(item => {
      const { id, src, alt } = item;
      return <img src={src} alt={alt} key={id} />;
    });
  }

  render() {
    const { error, photos } = this.state;
    const items = this.renderItems(photos);

    if (error) {
      return <ErrorMessage />;
    }

    return <div className="palette">{items}</div>;
  }
}

export default Palette;
