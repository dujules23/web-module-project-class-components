import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: ''
        }
    }

    //handle the changes

    handleChanges = e => {
        //update state with each keystroke
        
        this.setState({
            ...this.state,
            newTodo: e.target.value
        })
    }
    
    //handle submit
    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.newTodo);

        this.setState({ newTodo: ""})
    }


    //render form

    render() {
        return (
            <form className="form">
                <input type="text" name="item" value={this.state.newTodo} onChange={this.handleChanges}/>
                <button className="button" onClick={this.handleSubmit}>Add</button>
            </form>
        );
    };
};

export default TodoForm;