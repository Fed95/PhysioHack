import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Route, Switch } from "react-router-dom";

function Results() {
    let users = useSelector((state) => state.users)

    if (users != null && users.length > 0){
        return(
            <div>
                <h2>{users[0].address}</h2>
            </div>
        )
    }
    return(<Redirect to="/" />)
}

export default Results;