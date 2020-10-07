import React, { Component } from 'react';

export default class Card extends Component {
  handleClick = () => {
    this.props.onCardClick(this.props.card);
  };
  render() {
    return (
      <li className='photo-elements__item'>
        <img
          className='photo-elements__image'
          src={this.props.card.link}
          alt={this.props.card.name}
          onClick={this.handleClick}
        />

        <div className='photo-elements__caption'>
          <h2 className='photo-elements__text'>{this.props.card.name}</h2>
          <div className='photo-elements__like-container'>
            <button
              className='photo-elements__like-button'
              type='button'
              aria-label='Нравится'
            />
            <p className='photo-elements__like-counter'>0</p>
          </div>
          <button
            className='photo-elements__delete-button'
            type='button'
            aria-label='Удалить'
          />
        </div>
      </li>
    );
  }
}
