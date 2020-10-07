import React, { Component } from 'react';

export default class ModalImage extends Component {
  render() {
    return (
      <div className={`${this.props.name} ${this.props.isOpen ? 'pic-modal_opened' : ''}`}>
        <div className='pic-modal__container'>
          <figure className='pic-modal__picture'>
            <img src={this.props.card.link} alt={this.props.card.name} className='pic-modal__image' />
            <figcaption className='pic-modal__caption'>{this.props.card.name}</figcaption>
          </figure>

          <button
            className='pic-modal__close-button'
            type='button'
            aria-label='Закрыть'
            onClick={this.props.onClose}
          />
        </div>
      </div>
    );
  }
}
