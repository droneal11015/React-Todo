import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ""
        };
    }

    handleChanges = event => {
        this.setState({
            item: event.target.value
        });
    };

    submitItem = event => {
        event.preventDefault();
        this.setState({ item: ""});
        this.props.addItem(event, this.state.item);
    };

    render() {
        return (
            <form onSubmit={this.submitItem}>
                <input 
                    task="item"
                    value={this.state.item}
                    onChange={this.handleChanges}
                />
                <button>Add Todo</button>
            </form>
        );
    }
}

export default ListForm;