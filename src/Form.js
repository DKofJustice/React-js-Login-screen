import React, {useState} from 'react';
import FormSignup from './FormSignup';
import FormValidated from './FormValidated';
import './App.css';
import StoreLogo from './Web-store-logo.svg';

function Form() {
    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        password2: "",
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = e => {
        console.log(e.target.value);
        setInput({
            ...input, 
            [e.target.name]: e.target.value
        });
    }
    const handleErrors = () => {
        let isError = false;
        let error = {};

        if (!input.firstName) {
            isError = true;
            error.firstName = "First name required";
        }

        if (!input.lastName) {
            isError = true;
            error.lastName = "Last name required";
        }

        if (!input.username) {
            isError = true;
            error.username = "Username required";
        }

        let regex = /^([a-zA-Z0-9.-]+)@([a-zA-z0-9-]+).([a-z]{2,8})(\.[a-z]{2,8})?$/;
        if (!input.email) {
            isError = true;
            error.email = "Email required";
        } else if (!regex.test(input.email)) {
            isError = true;
            error.email = "This is not a valid email"
        }
        
        if (!input.password) {
            isError = true;
            error.password = "Password required";
        } else if (input.password.length < 6) {
            isError = true;
            error.password = "Password requires at least 6 characters";
        }

        if (!input.password2) {
            isError = true;
            error.password2 = "Please confirm password";
        } else if (input.password !== input.password2) {
            isError = true;
            error.password2 = "Password does not match";
        }

        if (isError) {
            setErrors(error);
        }
        return isError
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!handleErrors()) {
            setErrors("");
            setIsSubmitted(true);
        }

        console.log(input, isSubmitted, errors, handleErrors())
    };

    return(
        <div className="container">
            <div className="landing-bkg"></div>
            <div className="landing-page">
                <img src={StoreLogo} alt="Store logo"/>
                <div className="landing-text">
                    <h1>Games of all genres, for everyone</h1>
                    <p>Check the entire collection in our store</p>
                </div>
            </div>
            <div className="side-panel">
                {!isSubmitted && <FormSignup handleChange={handleChange} 
                handleSubmit={handleSubmit} errors={errors}/>}
                {isSubmitted && <FormValidated />}
            </div>
        </div>
    );
}

export default Form;