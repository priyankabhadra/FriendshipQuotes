const deleteCard = (value) => {
    return {
        type: "DeleteCard",
        payload: value
    }
}

export default deleteCard;