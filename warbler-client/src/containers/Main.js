import React from "react"; // Stateless functional component so we dont need to destructure component. 
import { Switch, Route, withRouter, Redirect } from "react-router-dom"; // Helps us pass props down
import { connect } from "react-redux";
import Homepage from "../components/Homepage";

const Main = props => {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" render={props => <Homepage {...props} />} />
            </Switch>
        </div>
    );
};

function mapStateToProps(state) {
    return { //Keys here will be placed onto props
        currentUser: state.currentUser
    };
};

export default withRouter(connect(mapStateToProps, null)(Main)); //Allows us to get the props from the router to the Homepage component. Also allows the use of the history object. 