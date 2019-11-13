import React from 'react';
import './styles.scss';

export default class AnswerOptions extends React.Component {
    render() {
        return (
            <div 
                className="Questions__answer_options"
            >
                <input type="radio" id="europe" name="europe" label="europe"/>    
                <label for="europe">Europe</label>
                <span className="option__actions">
                    <button>Delete</button>
                    <button>Edit</button>
                </span>
            </div>
        )
    }
}