import React from 'react';
import { connect } from 'react-redux';
import Questions from '../Questions';
import Modal from '../Modal';
import DummyQuestions from '../DummyQuestions';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { addQuestion, deleteQuestion } from '../../redux/actions/addQuestion';
import '../Pages/styles.scss';

class Pages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newQuestion: ' ',
            attributeAnswers: [{}],
            answersCount: [{
                'answerId': 0,
                'attributes': [{
                    'attributeId': 0,
                    'attribute': ' ',
                }],
            }],
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
                showAnswerAttributes: true,
                answersCount: [...this.state.answersCount, ...[{'answerId': this.state.answersCount.length++}]]
            })    
        }
        
        this.handleAddAttributes = (event, item) => {
            const updatedAttributes = this.state.answersCount.map((element) => {
                if(element.answerId == item.answerId) {
                    console.log('ATR E', element);
                    element.attributes = [ ...element.attributes, {'attributeId': element.attributes.length++}];
                }
                return element;
            })
            console.log('UDPATED ATTRIBUTES', updatedAttributes);
            // debugger;
            this.setState({
                attributeAnswers: [...this.state.attributeAnswers, ...[{}]]
            })
        }

        this.RemoveAttributes = () => {
            this.setState({
                attributeAnswers: [...this.state.attributeAnswers].splice(this.state.attributeAnswers.length-2, this.state.attributeAnswers.length-1)
            })
        }

        this.deleteAnswer = () => {
            this.setState({
                answersCount: [...this.state.answersCount].splice(this.state.answersCount.length-2, this.state.answersCount.length-1)
            })
        }

        this.saveQuestion = (payload) => {
            this.props.addQuestion(payload);
        }

        this.handleQuestionChange = (event, value) => {
            this.setState({
                newQuestion: event.target.value,
            })
        }

        this.handleAttributeChange = (event, element, item) => {
            console.log('ATTRIBUTE ITEM', element, item);
            // answersCount.attributes
            const matchingAnswer = this.state.answersCount.filter((i) => {
                if(i.answerId === item.answerId) return i;
            })
            console.log('MATCHED ANSWER', matchingAnswer);
            // console.log('MATCHING ANSWER', matchingAnswer.attributes.length);
            const updateAttributes = matchingAnswer[0].attributes.map((element) => {
                if(element.attributeId == item.attributeId) {
                    debugger;
                    element.attribute = event.target.value
                }
                debugger;
                return element;
            })

            console.log('UPDATED ATTRIBUTES', updateAttributes);

            // this.setState({
            //     newAnswer: event.target.value,
            //     answersCount: updatedAnswers, 
            // })
        }

        this.handleAnswerChange = (event, item) => {
            console.log('ANSWER ITEM', item.answerId);
            const updatedAnswers = this.state.answersCount.map((element) => {
                if(element.answerId == item.answerId) {
                    element['answer'] = event.target.value
                }
                return element;
            })

            this.setState({
                newAnswer: event.target.value,
                answersCount: updatedAnswers, 
            })
        }
        
    }
    render() {
        console.log('ANSWERS', this.state.answersCount);
        console.log('NEW QUESTION', this.state.newQuestion);
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
                            <label className="Question__label" for="Question">Question</label>
                            <span className="label__input">
                                <textarea 
                                    className="Question__input"
                                    type="text" 
                                    placeholder="Add the Question here"
                                    value={this.state.newQuestion}
                                    onChange={(event, value) => {this.handleQuestionChange(event, value)}}
                                />
                            </span>
                            <div className="Add__button" onClick={() => { this.handleAddAnswers()}}>
                                Add Answers
                            </div>
                            
                            {this.state.answersCount.map((item)=> {
                                return <div className="Answer__container">
                                        <label className="Answer_label">Answer</label>
                                        <input 
                                            type="text"
                                            onChange={(event) => {this.handleAnswerChange(event, item)}}
                                            value={this.state.newAnswer}
                                        >
                                        </input>
                                        <span
                                            className="Delete__answer"
                                            onClick={() => { this.deleteAnswer() }}
                                        >
                                            <HighlightOffIcon />
                                        </span>
                                        <div 
                                            onClick={(event) => { this.handleAddAttributes(event, item) }}     
                                            className="Add__attributes_container"
                                        >
                                            <AddCircleOutlineIcon />
                                            <span
                                                className="Add__attributes"
                                            >
                                                Add Attributes
                                            </span>
                                        </div>
                                        <span
                                            onClick={() => this.saveQuestion('My First Question')} 
                                            className="Save__question"
                                        >
                                            Save
                                        </span>
                                        
                                        {item.attributes.map((element) => {
                                            return <div className="Attribute__input">
                                                        <input 
                                                            type="text" 
                                                            onChange={(event) => {this.handleAttributeChange(event, element, item)}}
                                                        />
                                                        <span onClick={() => { this.RemoveAttributes() }}>
                                                            <HighlightOffIcon />
                                                        </span>
                                                    </div>
                                        })}
                                        
                                    </div>
                                })}
                        </Modal>
                    }
                    {this.state.questionsData.map((element) => {
                        return <DummyQuestions data={element}/>
                    })}
                </div>
    }
}

const mapStateToProps = state => {
    return { 
        state: state
    }
}

const mapDispatchToProps = dispatch => ({
    addQuestion: (payload) => {
        dispatch(addQuestion(payload))
    },
    deleteQuestion: (payload) => {
        dispatch(deleteQuestion(payload))
    }
})
    
export default connect(mapStateToProps, mapDispatchToProps)(Pages);
