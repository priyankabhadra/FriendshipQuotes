const addBook = (value) =>{
    return {
        type: "AddBook",
        payload: value
    }
}

export default addBook;