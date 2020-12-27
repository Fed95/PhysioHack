import { useSelector, useDispatch } from 'react-redux'

function Results() {
    let users = useSelector((state) => state.users.payload)
    if (users != null && users.length > 0){
        return(
            <div>
                <h2>{users[0].name} {users[0].surname}</h2>
            </div>
        )
    }
    return
        <div>
            <h2>ciaooooo</h2>
        </div>
}

export default Results;