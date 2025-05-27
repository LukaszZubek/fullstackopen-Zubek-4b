const Notification = ({text}) => {
    const notification = {
        color: 'red',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }
    if(text !== null){
        return(
            <div style={notification}>
                {text}
            </div>
        )
    } else return null
}

export default Notification