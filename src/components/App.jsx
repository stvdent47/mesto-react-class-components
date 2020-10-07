import React, { Component } from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import ModalWithForm from './ModalWithForm.jsx';
import ModalImage from './ModalImage.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditProfileModalOpen: false,
      isAddPlaceModalOpen: false,
      isEditAvatarModalOpen: false,
      isModalImageOpen: false,
      selectedCard: {},
    };
  }

  handleEditProfileClick = () => {
    this.setState({
      isEditProfileModalOpen: true,
    });
  };

  handleAddPlaceClick = () => {
    this.setState({
      isAddPlaceModalOpen: true,
    });
  };

  handleEditAvatarClick = () => {
    this.setState({
      isEditAvatarModalOpen: true,
    });
  };

  handleCardClick = (card) => {
    this.setState({
      selectedCard: card,
      isModalImageOpen: true,
    });
  };

  closeAllModals = () => {
    this.setState({
      isEditProfileModalOpen: false,
    });
    this.setState({
      isAddPlaceModalOpen: false,
    });
    this.setState({
      isEditAvatarModalOpen: false,
    });
    this.setState({
      isModalImageOpen: false,
    });
  };

  render() {
    return (
      <>
        <Header />
        <Main
          onEditProfile={this.handleEditProfileClick}
          onAddPlace={this.handleAddPlaceClick}
          onEditAvatar={this.handleEditAvatarClick}
          onCardClick={this.handleCardClick}
        />
        <Footer />

        <ModalWithForm
          name='edit-modal'
          title='Редактировать профиль'
          submitButtonText='Сохранить'
          isOpen={this.state.isEditProfileModalOpen}
          onClose={this.closeAllModals}
          children={
            <>
              <input
                type='text'
                name='profile-name'
                id='profile-name-input'
                placeholder='Ваше имя'
                className='modal__input'
                required
                minLength='2'
                maxLength='40'
                autoComplete='off'
              />
              <p
                className='modal__input-error-message'
                id='profile-name-error'
              />

              <input
                type='text'
                name='profile-job'
                id='profile-job-input'
                placeholder='Ваша профессия'
                className='modal__input'
                required
                minLength='2'
                maxLength='200'
                autoComplete='off'
              />
              <p
                className='modal__input-error-message'
                id='profile-job-error'
              />
            </>
          }
        />
        <ModalWithForm
          name='add-modal'
          title='Новое место'
          submitButtonText='Создать'
          isOpen={this.state.isAddPlaceModalOpen}
          onClose={this.closeAllModals}
          children={
            <>
              <input
                type='text'
                name='place-name'
                id='place-name-input'
                placeholder='Название'
                className='modal__input'
                required
                minLength='1'
                maxLength='30'
                autoComplete='off'
              />
              <p className='modal__input-error-message' id='place-name-error' />

              <input
                type='url'
                name='place-link'
                id='place-link-input'
                placeholder='Ссылка на картинку'
                className='modal__input'
                required
              />
              <p className='modal__input-error-message' id='place-link-error' />
            </>
          }
        />
        <ModalWithForm
          name='avatar-update-modal'
          title='Обновить аватар'
          submitButtonText='Сохранить'
          isOpen={this.state.isEditAvatarModalOpen}
          onClose={this.closeAllModals}
          children={
            <>
              <input
                type='url'
                name='avatar-link'
                id='avatar-link-input'
                placeholder='Ссылка на картинку'
                className='modal__input'
                required
              />
              <p
                className='modal__input-error-message'
                id='avatar-link-error'
              />
            </>
          }
        />
        <ModalWithForm
          name='remove-card-modal'
          title='Вы уверены?'
          submitButtonText='Да'
          onClose={this.closeAllModals}
        />

        <ModalImage
          name='pic-modal'
          card={this.state.selectedCard}
          isOpen={this.state.isModalImageOpen}
          onClose={this.closeAllModals}
        />
      </>
    );
  }
}
