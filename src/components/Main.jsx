import React, { Component } from 'react';
import profilePhoto from '../images/profile-photo.jpg';
import api from '../utils/api.js';
import Card from './Card.jsx';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '...',
      userDescription: '...',
      userAvatar: profilePhoto,
      cards: [],
    };
  }

  componentDidMount() {
    Promise.all([api.getProfileInfo(), api.getCards()])
      .then((res) => {
        const [profileInfo, initialCards] = res;
        this.setState({
          userName: profileInfo.name,
          userDescription: profileInfo.about,
          userAvatar: profileInfo.avatar,
          cards: initialCards,
        });
      })
      .catch((err) => alert(err));
  }

  render() {
    return (
      <main className='main'>
        <section className='profile'>
          <div
            className='profile__photo-container'
            onClick={this.props.onEditAvatar}
          >
            <img
              src={this.state.userAvatar}
              alt='фото профиля'
              className='profile__photo'
            />
          </div>

          <div className='profile__info'>
            <div className='profile__title'>
              <h1 className='profile__name'>{this.state.userName}</h1>
              <button
                className='profile__edit-button'
                type='button'
                aria-label='Редактировать'
                onClick={this.props.onEditProfile}
              />
            </div>

            <p className='profile__description'>{this.state.userDescription}</p>
          </div>

          <button
            className='profile__add-button'
            type='button'
            aria-label='Добавить'
            onClick={this.props.onAddPlace}
          />
        </section>

        <section className='photo-elements'>
          <ul className='photo-elements__list'>
            {this.state.cards.map((item) => {
              return (
                <Card
                  card={item}
                  key={item._id}
                  onCardClick={this.props.onCardClick}
                />
              );
            })}
          </ul>
        </section>
      </main>
    );
  }
}
