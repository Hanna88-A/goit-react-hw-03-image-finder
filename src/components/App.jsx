import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    showModal: false,
    imageName: '',
    bigImage: null,
    tags: '',
    page: 1
  };

  handleFormSubmit = (imageName) => {
    this.setState({ imageName });
  };

   handleImageClick = (bigImage, tags) => {
    this.setState({ bigImage, tags });
  };

  togleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }));
  };


  render() {
    const { showModal, imageName, bigImage, tags, page } = this.state

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageName={imageName} togleModal={this.togleModal} handleImageClick={this.handleImageClick} page={page} />

        {showModal && <Modal onClose={this.togleModal}><img src={bigImage} alt={tags} width={900}/></Modal>}

      </div>
    )
  }
};
