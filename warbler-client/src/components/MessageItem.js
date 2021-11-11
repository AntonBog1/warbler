import React from "react"; //stateless functional component. 
import Moment from "react-moment";
import DefaultProfileImg from "../images/default-profile-image.jpg";
import { Link } from "react-router-dom";

const MessageItem = ({ date, profileImageUrl, text, username }) => (
    <div>
        <li className="list-group-item">
            <img src={profileImageUrl || DefaultProfileImg} alt={username} height="100" width="100" className="timeline-image" />
            <div className="message-area">
                <Link to="/">@{username} &nbsp;</Link>
                <span className="text-muted">
                    <Moment className="text-muted" format="Do MMM YYYY">
                        {date}
                    </Moment>
                </span>
                <p>{text}</p>
            </div>
        </li>
    </div>
);

export default MessageItem;