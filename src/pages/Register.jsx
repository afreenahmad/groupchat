import React from 'react'

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">AfreenChat</span>
                <span className="title">Register</span>
                <form>
                    <input type = "text" placeholder="display"/>
                    <input type="email" placeholder="email"/>
                    <input type ="password" placeholder="password"/>
                    <input type="file" id="file"/>
                    <label htmlFor="file">
                        <img src="" alt=""/>

                    </label>
                    <button>Sign Up</button>
                </form>
                <p>Have an account? Login</p>
            </div>
            </div>
    )
}

export default Register;
