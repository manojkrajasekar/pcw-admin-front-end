import React from 'react';
import AnswerOptions from '../AnswerOptions';
import './styles.scss';

export default class Questions extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            showEditText: false, 
            questionValue1: "What is the region to be selected for Category ?",
            answerOption: "Europe",
            showAnswerText: false,
            closeOption: false,
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
            console.log('UPDATED VAL', e.target.value);
            this.setState({
                questionValue1: e.target.value,
            })
        }

        this.UpdateAnswerOption = (e, v) => {
            this.setState({
                answerOption: e.target.value,
                showAnswerText: true,
            })
        }

        this.handleOptionEdit = () => {
            this.setState({
                // answerOption: e.target.value,
                
                showAnswerText: true,
            })
        }

        this.handleAnsweOptionEdit = () => {
            this.setState({
                // answerOption: e.target.value,
                closeOption: true,
                showAnswerText: true,
            })
        }

        this.closeAnswerOptionEdit = () => {
            this.setState({
                showAnswerText: false,
            })
        }
    }

    render() {
        return (
            <div className="Question__container">
                <div className="Questions__title">
                    {!this.state.showEditText && <span>
                            {this.state.questionValue1}
                        </span>
                    }
                    {this.state.showEditText && (
                        <span>
                            <input 
                                className="Edit__Questions__title"
                                type="text" 
                                onChange={(e, v) => { this.UpdateQuestion(e, v)}}
                                value={this.state.questionValue1}
                            />
                        </span>
                    )}
                    <span className="Delete">Delete Question</span>
                    <span 
                        className="Edit" 
                        onClick={(value) => { this.handleEdit(value) }}
                    >
                        Edit Question
                    </span>
                    {this.state.showEditText && (<span onClick={() => { this.closeEdit() }}/>)}
                </div>
                <div 
                    className="Questions__answer_options"
                >
                    <input type="radio" id="europe" name="europe" label="europe"/>    
                    {!this.state.showAnswerText && (
                        <label for="europe">{this.state.answerOption}</label>
                    )}
                    {this.state.showAnswerText && (
                        <input 
                            type="text" 
                            value={this.state.answerOption}
                            onChange={(e, v) => { this.UpdateAnswerOption(e, v) }}
                        />
                    )}
                    <span className="option__actions">
                        <span className="Delete">Delete</span>
                        <span 
                            className="Edit"
                            onClick={(value) => { this.handleAnsweOptionEdit(value) }}
                        >
                            {!this.state.showAnswerText ? 'Edit' : 'Save'}
                        </span>
                        {this.state.showAnswerText && (<span onClick={() => { this.closeAnswerOptionEdit() }}/>)}
                    </span>
                </div>
                <div className="Questions__answer_options">
                    <input type="radio" id="europe" name="europe" label="europe"/>    
                    <label for="europe">Europe</label>
                    <span className="option__actions">
                        <span className="Delete">Delete</span>
                        <span className="Edit">Edit</span>
                    </span>
                </div>
                <div className="Questions__answer_options">
                    <input type="radio" id="europe" name="europe" label="europe"/>    
                    <label for="europe">Europe</label>
                    <span className="option__actions">
                        <span className="Delete">Delete</span>
                        <span className="Edit">Edit</span>
                    </span>
                </div>
            </div>
        )
    }
}

