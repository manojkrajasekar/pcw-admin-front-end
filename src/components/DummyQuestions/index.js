import React from 'react';
import Modal from '../Modal';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './styles.scss';

class DummyQuestions extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            showEditText: false, 
            questionValue1: this.props.data.value,
            answerOptions: this.props.data.answers,
            showAnswerText: false,
            closeOption: false,
            showDeleteModal: false,
            showModal: false,
            showAttrbiuteEditText: false,
            editAttr: 0, 
            showDeleteConfirmation: false,
        };

        this.handleEdit = (value) => {
            console.log('QUESTION VAL', value);
            this.setState({
                showEditText: true,
            })
        }

        this.closeEdit = () => {
            this.setState({
                showEditText: false,
                showAnswerText: true,
            })
        }
    
        this.UpdateQuestion = (e, v) => {
            // console.log('UPDATED VAL', e.target.value);
            this.setState({
                questionValue1: e.target.value,
            })
        }

        this.UpdateAnswerOption = (event, item, value) => {
            this.setState({
                answerOptions: [...this.state.answerOptions.map((element) => {
                    if(element._id === item._id) {
                        // console.log('MATCH', event.target.value);
                        element.value = event.target.value
                    }
                    return element;
                })],
                showAnswerText: true,
            })
        }

        this.handleOptionEdit = () => {
            this.setState({
                // answerOptions: e.target.value,
                
                showAnswerText: true,
            })
        }

        this.handleAnsweOptionEdit = (item, value) => {
            if(this.state.showAnswerText) {
                // console.log('SAVE THE ANSWER AND CONTINUE');
            }
            this.setState({
                answerOptions: [...this.state.answerOptions.map((element) => {
                    if(element._id === item._id) {
                        element['showEdit'] = true
                    }

                    return element;
                })],
                closeOption: true,
                showAnswerText: true,
            })
        }

        this.showAnswerOptionEdit = (item, attr) => {
            console.log('ATTRIBUTE ITEM', item, attr);
            this.setState({
                editAttr: attr,
                showAttrbiuteEditText: true,
            })
        }

        this.handleAttributeEdit = (item, value) => {
            console.log('ATTRIBUTE ITEM', item);
            this.setState({
                answerOptions: [...this.state.answerOptions.map((element) => {
                    console.log('ATTRIBUTE ELEMENT', element);
                    if(element._id === item._id) {
                        element['showEdit'] = true
                    }

                    return element;
                })],
            })
        }

        this.closeAnswerOptionEdit = (item) => {
            // console.log('VALUE', item._id);
            this.setState({
                answerOptions: [...this.state.answerOptions.map((element) => {
                    if(element._id === item._id) {
                        element.showEdit = false;
                    }

                    return element;
                })],
                showAnswerText: false,
            })
        }

        this.handleDeleteAnswer = (item) => {
            console.log('DELETE ITEM', item);
            this.setState({
                answerOptions: [...this.state.answerOptions.map((element) => {
                    if(element._id === item._id) {
                        element['showModal'] = true
                    }

                    return element;
                })],
                // showModal: true,
            })
        }

        this.handleCloseModal = (item) => {
            console.log('CLOSING MODAL', item);
            this.setState({
                answerOptions: [...this.state.answerOptions.map((element) => {
                    if(element._id === item) {
                        element['showModal'] = false
                    }

                    return element;
                })],
            })
        }

        this.removeEdit = () => {
            // console.log('REMOVE EDIT OPTION');
            this.setState({
                editAttr: 0
            })
        }

        this.handleAnswerAttrDelete = () => {
            // Handle the Delete Attribute
        }

        this.handleDeleteQuestion = () => {

        }
    }

    render() {
        // console.log('QUESTIONS STATE', this.props.data);
        // console.log('UPDATED QUESTION', this.state.questionValue1);
        return (
            <div className="Question__container">
                <div className="Questions__title">
                    {!this.state.showEditText && <span>
                            {this.state.questionValue1}
                        </span>
                    }
                    {this.state.showEditText && (
                        <span className="Edit__Questions__title">
                            <input 
                                className="Edit__Questions__title"
                                type="text" 
                                onChange={(e, v) => { this.UpdateQuestion(e, v)}}
                                value={this.state.questionValue1}
                            />
                        </span>
                    )}
                    <span className="Question__actions">
                        <span  onClick={() => {this.handleDeleteQuestion()}}>
                            <DeleteIcon fontSize="small"  />
                        </span>
                        <span onClick={(value) => { this.handleEdit(value) }}>
                            {!this.state.showEditText ? <EditIcon /> : 'Save Changes'}
                        </span>
                    </span>
                    {this.state.showEditText && (<span className="Cancel__changes" onClick={() => { this.closeEdit() }}><HighlightOffIcon /></span>)}
                </div>
                {this.state.answerOptions.map((item) => {
                    console.log('MAPPING ITEM', item);
                    return (
                        <div className="Questions__answer_options">
                            <input type="radio" id={item.value} name={item.value} label={item.value}/>    
                            
                                <label for="europe">{item.value}</label>
                            
                            
                            
                            {item.showEdit && (
                                <Modal
                                    className="EditOption__modal"
                                    itemId={item._id}
                                    modalTitle="Edit Questions"
                                >
                                    <span
                                        className="Option__action" 
                                        onClick={() => { this.closeAnswerOptionEdit(item) }}
                                    >
                                        <HighlightOffIcon />
                                    </span>
                                    <input 
                                        className="EditOption__container"
                                        type="text" 
                                        value={item.value}
                                        onChange={(event, value) => { this.UpdateAnswerOption(event, item, value) }}
                                    />
                                    {item.attributes && item.attributes.map((attr) => {
                                        console.log('STATE ATTR', this.state.editAttr);
                                        const isCurrentAttr = this.state.editAttr === attr;
                                       return <div className="attributes__list">
                                            <div className="EditOption__container">
                                                
                                                {!isCurrentAttr && (
                                                    <span>{attr}</span>
                                                )}
                                                    {isCurrentAttr && (
                                                        <input 
                                                            className="EditOption__input"
                                                            type="text"
                                                            value={attr}
                                                            onChange={(event, value) => { this.handleAttributeEdit(event, attr, value) }}
                                                        />
                                                    )}
                                                    <span 
                                                        onClick={() => { handleAnswerAttrDelete(attr) }}
                                                    >   
                                                        <DeleteIcon fontSize="small" />
                                                    </span>
                                                    <span 
                                                        color="primary"
                                                        onClick={(value) => { this.showAnswerOptionEdit(item, attr, value) }}
                                                    >
                                                        <EditIcon />
                                                    </span>
                                                
                                                {isCurrentAttr && (
                                                    <span onClick={() => { this.removeEdit() }}>
                                                        <HighlightOffIcon />
                                                    </span>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    })}
                                </Modal>
                            )}
                            {item.showModal && 
                                <Modal
                                    closeModal={this.handleCloseModal}
                                    itemId={item._id}
                                    modalTitle="Are you sure, you want to Delete ?"
                                >
                                    <div className="Delete__Modal_actions">
                                        <div className="Delete__Yes">Yes</div>
                                        <div 
                                            className="Delete__No" 
                                            onClick={() => { this.handleCloseModal(item._id)}}
                                        >
                                            No
                                        </div>
                                    </div>
                                </Modal>
                            }
                            <span className="option__actions">
                                <span
                                    className="Option__action"
                                    title="Delete Option"
                                    onClick={() => { this.handleDeleteAnswer(item)}} 
                                >   
                                    <DeleteIcon fontSize="small" />
                                </span>
                                <span 
                                    className="Option__action"
                                    title="Edit Option"
                                    onClick={(value) => { this.handleAnsweOptionEdit(item, value) }}
                                >
                                    <EditIcon fontSize="small" />

                                </span>
                                {this.state.showAnswerText && (
                                    <span
                                        className="Option__action" 
                                        onClick={() => { this.closeAnswerOptionEdit(item) }}
                                    >
                                        <HighlightOffIcon />
                                    </span>
                                )}
                            </span>
                        </div>
                    )
                 })}
              
            </div>
        )
    }
}

export default DummyQuestions;