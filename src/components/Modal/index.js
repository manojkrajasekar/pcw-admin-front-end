import React from 'react';
import './styles.scss';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);

         this.handleCloseModal = () => {
            this.props.closeModal(this.props.itemId);
        }
    }
    
    render() {
        return (
            <div className={`Modal__container ${this.props.modalType === 'Wide' ? 'Modal__wide' : ''}`}>
                <div className={`${this.props.modalTitle && 'Modal__header'}`}>
                    {this.props.modalTitle}
                    <span className="Modal__close" onClick={ this.handleCloseModal}>X</span>
                </div>
                <div>{this.props.children}</div>
            </div>
        )
    }
}