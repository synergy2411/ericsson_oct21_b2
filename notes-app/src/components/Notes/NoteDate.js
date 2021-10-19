const NoteDate = ( props ) => {
    let month = props.createdAt.toLocaleString('en-US', {month : 'long'})
    let day = props.createdAt.toLocaleString('en-US', {day : 'numeric'})
    let year = props.createdAt.getFullYear()

    return (
        <p>Created At : {month} {day}, {year}</p>
    )

}

export default NoteDate;