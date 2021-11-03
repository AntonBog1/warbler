import React, { Component } from "react";

export default class AuthForm extends Component {
    constructor(props) {
        super(props); // super gets the parent props
        this.state = {
            email: "",
            username: "",
            password: "",
            profileImageUrl: ""
        };
    };

    // generic handleChange
    handleChange = e => { // using arrow functions to get the correct value of the keyword 'this'
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault(); // stops page from refreshing 
        const authType = this.props.signUp ? "signup" : "signin"; // if signup prop is there, signup. Otherwise, signin
        this.props.onAuth(authType, this.state)
        .then(() => {
            this.props.history.push("/");
        })
        .catch(() => {
            return;
        });
    };

    render() {
        const { email, username, password, profileImageUrl } = this.state;
        const { heading, buttonText, signUp, errors, history, removeError } = this.props;

        history.listen(() => { // if there is a change in the route, removeError
            removeError();
        });

        return (
            <div>
                <div className="row justify-content-md-center text-center">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <h2>{heading}</h2>
                            {errors.message && (
                            <div className="alert alert-danger">{errors.message}</div>)}
                            <label htmlFor="email">Email:</label>
                            <input
                                className="form-control"
                                id="email"
                                name="email"
                                onChange={this.handleChange}
                                value={email}
                                type="text"
                            />
                            <label htmlFor="password">Password:</label>
                            <input
                                className="form-control"
                                id="password"
                                name="password"
                                onChange={this.handleChange}
                                type="password"
                            />
                            {signUp && ( // if the prop "signUp" is passed, show the following two inputs
                                <div>
                                    <label htmlFor="username">Username:</label>
                                    <input
                                        className="form-control"
                                        id="username"
                                        name="username"
                                        onChange={this.handleChange}
                                        value={username}
                                        type="text"
                                    />
                                    <label htmlFor="image-url">Image URL:</label>
                                    <input
                                        className="form-control"
                                        id="image-url"
                                        name="profileImageUrl"
                                        onChange={this.handleChange}
                                        type="text"
                                        value={profileImageUrl}
                                    />
                                </div>
                            )}
                            <button type="submit" className="btn btn-primary btn-block btn-lg">
                                {buttonText}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    };
};

