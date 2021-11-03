import React from "react";
import { Link } from "react-router-dom";

const Homepage = ({ currentUser }) => {
    if (!currentUser.isAuthenticated) { // if user is not logged in, show this
        return (
            <div className="home-hero">
                <h1>What's Happening?</h1>
                <h4>New to Warbler?</h4>
                <Link to="/signup" className="btn btn-primary">
                    Sign up here
                </Link>
            </div>
        );
    }
    return ( // if they are logged in show this 
        <div>
            <h1>YOU MADE IT!</h1>
        </div>
    );
};

export default Homepage;