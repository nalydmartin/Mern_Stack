import React, { useState } from 'react';

const NewUser = props => {

    const { inputs, setInputs } = props;

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const [error, setError] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const onChange = e => {
        setInputs({
            // Bring in every attribute from form and spread it using ...inputs
            ...inputs,
            [e.target.name]: e.target.value,
        });

        if(e.target.name === "firstName") {
            if (e.target.value.length < 2 ) {
                setError({...error, firstName: "First Name Must Be At Least 2 Characters."});
            } else {
                setError({...error, firstName: ""});
            }
        } else if (e.target.name === "lastName") {
            if(e.target.value.length < 2) {
                setError({...error, lastName: "Last Name Must Be At Least 2 Characters."});
            } else {
                setError({...error, lastName: ""});
            }
        } else if (e.target.name === "email") {
            if(e.target.value.length < 5) {
                setError({...error, email: "Email must be at least 5 characters."});
            } else {
                setError({...error, email: ""});
            }
        } else if (e.target.name === "password") {
            if(e.target.value.length < 8) {
                setError({...error, password: "Password must be at least 8 characters."});
            } else {
                setError({...error, password: ""});
            }
        } else if (e.target.name === "confirmPassword") {
            if (e.target.value !== inputs.password) {
                setError({...error, confirmPassword: "Passwords must match!"});
            } else {
                setError({...error, confirmPassword: ""});
            }
        }
    };

    const formSubmitMessage = e => {
        setHasBeenSubmitted( true );
    }

    return (
        <form onSubmit={ formSubmitMessage }>
            {
                hasBeenSubmitted ? 
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form.</h3> 
            }
            <div>
                {
                    error ?
                    <p style={{color: 'red'}}>{ error.firstName }</p>:
                    ''
                }
                <label htmlFor="firstName">First Name: </label>
                <input type="text" onChange={ onChange } name="firstName"/>
            </div>
            <div>
                {
                    error ?
                    <p style={{color: 'red'}}>{ error.lastName }</p>:
                    ''
                }
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" onChange={ onChange } name="lastName"/>
            </div>
            <div>
                {
                    error ?
                    <p style={{color: 'red'}}>{ error.email }</p>:
                    ''
                }
                <label htmlFor="email">Email: </label>
                <input type="email" onChange={ onChange } name="email"/>
            </div>
            <div>
                {
                    error ?
                    <p style={{color: 'red'}}>{ error.password }</p>:
                    ''
                }
                <label htmlFor="password">Password: </label>
                <input type="password" onChange={ onChange } name="password"/>
            </div>
            <div>
                {
                    error ?
                    <p style={{color: 'red'}}>{ error.confirmPassword }</p>:
                    ''
                }
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input type="password" onChange={ onChange } name="confirmPassword"/>
            </div>

            <input type="submit" value="Create User" />
        </form>

    )
}
export default NewUser;