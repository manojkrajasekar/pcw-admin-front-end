import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './styles.scss';
// import './stylesb.scss';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);

         this.handleCloseModal = () => {
            this.props.closeModal(this.props.itemId);
        }
    }
    
    render() {
        return (
            <div className="Modale">
                <div className={`Modal__container ${this.props.modalType === 'Wide' ? 'Modal__wide' : ''}`}>
                    <div className={`${this.props.modalTitle && 'Modal__header'}`}>
                        {this.props.modalTitle}
                        <span className="Modal__close" onClick={ this.handleCloseModal}>
                            <HighlightOffIcon />
                        </span>
                    </div>
                    <div>{this.props.children}</div>
                </div>
            </div>
        )
    }
}