import React from "react"; // Stateless functional component so we dont need to destructure component. 
import { Switch, Route, withRouter, Redirect } from "react-router-dom"; // Helps us pass props down
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import withAuth from "../hocs/withAuth";
import MessageForm from "../containers/MessageForm";

const Main = props => {
    const { authUser, errors, removeError, currentUser } = props;
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" render={props => <Homepage currentUser={currentUser} {...props} />} />
                <Route exact path="/signin" render={props => {
                    return (
                        <AuthForm
                            removeError={removeError}
                            errors={errors}
                            onAuth={authUser}
                            buttonText="Log in"
                            heading="Welcome Back" 
                            {...props}
                        />
                    )
                }} />
                <Route exact path="/signup" render={props => {
                    return (
                        <AuthForm
                            removeError={removeError}
                            errors={errors}
                            onAuth={authUser}
                            signUp
                            buttonText="Sign me up!"
                            heading="Join Warbler today!"
                            {...props}
                        />
                    )
                }} />
                <Route 
                    path="/users/:id/messages/new" 
                    component={withAuth(MessageForm)} />
            </Switch>
        </div>
    );
};

function mapStateToProps(state) {
    return { //Keys here will be placed onto props
        currentUser: state.currentUser,
        errors: state.errors
    };
};

export default withRouter(
    connect(mapStateToProps, { authUser, removeError })(Main)
    ); //Allows us to get the props from the router to the Homepage component. Also allows the use of the history object. 