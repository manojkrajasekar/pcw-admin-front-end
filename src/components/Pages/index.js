import React from 'react';
import Questions from '../Questions';
import Modal from '../Modal';
import DummyQuestions from '../DummyQuestions';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import '../Pages/styles.scss';

export default class Pages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            attributeAnswers: [{}],
            showAnswerAttributes: false,
            showAddQuestion: false,
            questionsData: [
                {
                    "_id": "FG1",
                    "order": 1,
                    "value": "What market are you listing your product for?",
                    "type": "checkBox",
                    "pageId": "FG",
                    "answers": [
                        {
                            "_id": "FG1.A1",
                            "value": "EU",
                            "attributes": [
                                "123",
                                "126",
                                "127",
                                "1550",
                                "1152",
                                "1175"
                            ]
                        },
                        {
                            "_id": "FG1.A2",
                            "value": "NOAM",
                            "attributes": [
                                "1694"
                            ]
                        }
                    ]
                },
                {
                    "_id": "FG2",
                    "order": 2,
                    "value": "What sub-category is your product?",
                    "type": "radio",
                    "pageId": "FG",
                    "answers": [
                        {
                            "_id": "FG2.A1",
                            "value": "Dairy, refrigerated",
                            "attributes": []
                        },
                        {
                            "_id": "FG2.A2",
                            "value": "Deli & Prepared",
                            "attributes": []
                        },
                        {
                            "_id": "FG2.A3",
                            "value": "Fresh Meat",
                            "attributes": [
                                "3909"
                            ]
                        },
                        {
                            "_id": "FG2.A4",
                            "value": "Fresh Fish",
                            "attributes": []
                        },
                        {
                            "_id": "FG2.A5",
                            "value": "Fresh Fruit & Vegetables",
                            "attributes": [
                                "165",
                                "166",
                                "1246",
                                "1288",
                                "2145",
                                "2147",
                                "2206",
                                "3519",
                                "3552",
                                "3800",
                                "3909"
                            ]
                        },
                        {
                            "_id": "FG2.A6",
                            "value": "Groceries",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FG3",
                    "order": 3,
                    "value": "Is the product part of a hierarchy?",
                    "type": "radio",
                    "pageId": "FG",
                    "answers": [
                        {
                            "_id": "FG3.A1",
                            "value": "Yes",
                            "attributes": [
                                "199",
                                "200",
                                "202",
                                "203",
                                "1664",
                                "1666",
                                "1668",
                                "1670",
                                "1671",
                                "2180",
                                "2181",
                                "3604",
                                "3607",
                                "3611",
                                "3614",
                                "3616",
                                "3618",
                                "3619",
                                "3620"
                            ]
                        },
                        {
                            "_id": "FG3.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                }
            ],
            addQuestion: " ",
        };

        this.handleAddQuestion = () => {
            this.setState({
                showAddQuestion: true,
            })
        }

        this.handleCloseModal = () => {
            this.setState({
                showAddQuestion: false,
            })
        }

        this.handleAddAnswers = () => {
            this.setState({
                showAnswerAttributes: true
            })    
        }
        
        this.handleAddAttributes = () => {
            this.setState({
                attributeAnswers: [...this.state.attributeAnswers, ...[{}]]
            })
        }

        this.RemoveAttributes = () => {
            this.setState({
                attributeAnswers: [...this.state.attributeAnswers].splice(this.state.attributeAnswers.length-2, this.state.attributeAnswers.length-1)
            })
        }
    }
    render() {
        return <div className="PageContainer">
                    <div 
                        className="Add__question"
                        onClick={() => { this.handleAddQuestion() }}
                    >
                        Add a New Question
                    </div>
                    {this.state.showAddQuestion && 
                        <Modal 
                            closeModal={this.handleCloseModal}
                            modalTitle="Add a New Question"
                            modalType="Wide"
                        >   
                            <div className="label__input">
                                <label className="Question__label" for="Question">Question</label>
                                <textarea 
                                    className="Question__input"
                                    type="text" 
                                    placeholder="Add the Question here"
                                    value={this.state.addQuestion}
                                />
                            </div>
                            <div className="Add__button" onClick={() => { this.handleAddAnswers()}}>
                                Add Answers
                            </div>
                            {this.state.showAnswerAttributes && (
                                <div className="Answer__container">
                                    <label className="Answer_label">Answer</label>
                                    <input type="text"></input>
                                    <div 
                                        onClick={() => { this.handleAddAttributes() }}     
                                        className="Add__attributes_container"
                                    >
                                        <AddCircleOutlineIcon />
                                        <span
                                            className="Add__attributes"
                                        >
                                            Add Attributes
                                        </span>
                                    </div>
                                    {this.state.attributeAnswers.map((element)=> {
                                        return <div className="Attribute__input">
                                                    <input type="text" />
                                                    <span onClick={() => { this.RemoveAttributes() }}>
                                                        <HighlightOffIcon />
                                                    </span>
                                                </div>
                                    })}
                                    <span className="Save__question">Save</span>
                                </div>
                            )}
                        </Modal>
                    }
                    {this.state.questionsData.map((element) => {
                        return <DummyQuestions data={element}/>
                    })}
                </div>
    }
}
    
