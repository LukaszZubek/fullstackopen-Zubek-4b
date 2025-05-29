const Total = ({parts}) => {
    const sum = parts.reduce((total, part) => total + part.exercises, 0)

    return(
        <p>
            <b>Total {sum}</b>
        </p>
    )
}

export default Total