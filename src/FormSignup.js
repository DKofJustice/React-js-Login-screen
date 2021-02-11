import React from 'react'
import './App.css';


const FormSignup = ({handleChange, handleSubmit, errors}) => {

    return(
            <div className="signup-section">
                <h1>Fill in the form below, to signup</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="formField">
                        <input type="text" id="firstName" name="firstName" className="form-input" 
                        placeholder="First Name" onChange={handleChange}/>
                        {errors.firstName && <p>{errors.firstName}</p>}

                        <input type="text" id="lastName" name="lastName" 
                        className="form-input" placeholder="Last Name" onChange={handleChange}/>
                        {errors.lastName && <p>{errors.lastName}</p>}

                        <input type="text" id="username" name="username" 
                        className="form-input" placeholder="Username" onChange={handleChange}/>
                        {errors.username && <p>{errors.username}</p>}

                        <input type="text" id="email" name="email" 
                        className="form-input" placeholder="Email" onChange={handleChange}/>
                        {errors.email && <p>{errors.email}</p>}

                        <input type="password" id="password" name="password" 
                        className="form-input" placeholder="Password" onChange={handleChange}/>
                        {errors.password && <p>{errors.password}</p>}

                        <input type="password" id="password2" name="password2" 
                        className="form-input" placeholder="Confirm Password" onChange={handleChange}/>
                        {errors.password2 && <p>{errors.password2}</p>}
                        <button type="submit" id="form-signup">Submit</button>
                    </div>
                </form>
            </div>
    );
}

export default FormSignup;