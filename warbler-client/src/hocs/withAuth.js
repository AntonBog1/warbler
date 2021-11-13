// make sure a user is logged in before they can see the MessageForm
import React, { Component } from "react";
import { connect } from "react-redux"

export default function withAuth(ComponentToBeRendered) {
    class Authenticate extends Component {
        componentWillUnmount() {
            if (this.props.isAuthenticated === false) { // if they are not signed in
                this.props.history.push("/signin"); // redirect them to the signin page
            };
        };
        componentWillUpdate(nextProps) {
            if (nextProps.isAuthenticated === false) {
                this.props.history.push("/signin");
            };
        };
        render() {
            return <ComponentToBeRendered {...this.props} />
        };
    };


    function mapStateToProps(state) {
        return {
            isAuthenticated: state.currentUser.isAuthenticated
        };
    };

    return connect(mapStateToProps)(Authenticate);
};