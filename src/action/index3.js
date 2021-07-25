const addCart = (value) => {
    return {
        type: "AddCart",
        payload: value
    }
}

export default addCart;