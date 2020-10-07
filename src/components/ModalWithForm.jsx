import React, { Component } from 'react';

export default class ModalWithForm extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div className={`modal ${this.props.name} ${this.props.isOpen ? 'modal_opened' : ''}`}>
        <div className='modal__container'>
          <h2 className='modal__title'>{this.props.title}</h2>

          <form
            action='#'
            name={`form-${this.props.name}`}
            className='modal__form'
            method='POST'
            noValidate
          >
            {this.props.children}

            <button type='submit' className='modal__button'>
              {this.props.submitButtonText}
            </button>
          </form>

          <button
            className='modal__close-button'
            type='button'
            aria-label='Закрыть'
            onClick={this.props.onClose}
          />
        </div>
      </div>
    );
  }
}
