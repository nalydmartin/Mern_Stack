import React, {Component} from 'react';

class PersonCard extends Component {

    constructor(props) {
        super(props);
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.state = {age: props.age};
        this.hairColor = props.hairColor;
    }

    render() {
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <h3>Age: {this.state.age}</h3>
                <h3>Hair Color: {this.props.hairColor}</h3>

                <button onClick={ this.addOne }>Increase Age By 1</button>
            </div>
        );
    }

    addOne = () => {
        this.setState((state) => ({ 
            age: state.age += 1
        }))
    }
}
export default PersonCard;