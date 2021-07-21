import React, { useState } from 'react';
import addBook from '../action/index2';
import { useDispatch } from "react-redux";

const MyForm = ({addId, setAddId}) => {
    const[bookAuthor, setBookAuthor] = useState('');
    const[bookCount, setBookCount] = useState('');
    const[bookDescription, setBookDescription] = useState('');
    const[bookId, setBookId] = useState('');
    const[bookName, setBookName] = useState('');

    const dispatch = useDispatch();

    function onsubmit() {
        let value = {bookAuthor};
        dispatch(addBook(value));
        setAddId(false);
    }

    return (
        <>{addId ?<>
        <p>Book Author: </p>
        <input type="text" value={bookAuthor} onChange={(e) => setBookAuthor(e.target.value)}></input>
        <button onClick={() => onsubmit()}>Submit</button></> : (<></>)}
        </>
    )
}

export default MyForm;