import React from "react"; // Stateless functional component so we dont need to destructure component. 
import { Switch, Route, withRouter, Redirect } from "react-router-dom"; // Helps us pass props down
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import { authUser } from "../store/actions/auth";

const Main = props => {
    const { authUser } = props;
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" render={props => <Homepage {...props} />} />
                <Route exact path="/signin" render={props => {
                    return (
                        <AuthForm onAuth={authUser} buttonText="Log in" heading="Welcome Back"{...props} />
                    )
                }} />
                <Route exact path="/signup" render={props => {
                    return (
                        <AuthForm onAuth={authUser} signUp buttonText="Sign me up!" heading="Join Warbler today!"{...props} />
                    )
                }} />
            </Switch>
        </div>
    );
};

function mapStateToProps(state) {
    return { //Keys here will be placed onto props
        currentUser: state.currentUser
    };
};

export default withRouter(connect(mapStateToProps, { authUser })(Main)); //Allows us to get the props from the router to the Homepage component. Also allows the use of the history object. 