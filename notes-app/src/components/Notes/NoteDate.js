import AuthContext from "../../store/auth-context"
import { Fragment, useContext } from 'react';

const NoteDate = ( props ) => {
    
    const context = useContext(AuthContext)

    let month = props.createdAt.toLocaleString('en-US', {month : 'long'})
    let day = props.createdAt.toLocaleString('en-US', {day : 'numeric'})
    let year = props.createdAt.getFullYear()

    return (
    <Fragment>
    {context.isLoggedIn && <p>Created At : {month} {day}, {year}</p>}
    </Fragment>
    )
                    
}

export default NoteDate;