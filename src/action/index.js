 const deleteData = (value) => {
    return{
        type: 'DeleteData',
        payload: value
    }
}

export default deleteData;