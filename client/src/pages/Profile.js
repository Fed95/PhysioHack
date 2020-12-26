import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams} from "react-router-dom";
function Profile() {
    let { topicId } = useParams();
    return (
        <div>
            <h2>Profile</h2>
            <h3>Requested topic ID: {topicId}</h3>;
        </div>
    );
}

export default Profile;