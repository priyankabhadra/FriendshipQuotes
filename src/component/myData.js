import React, {useState} from "react";
import editData from "../action/index1";
import { useDispatch } from "react-redux";


const MyData = ({newValue, editableId, setEditableId}) => {
    const[bookAuthor, setBookAuthor] = useState(newValue[0].bookAuthor || '');
    const[bookCount, setBookCount] = useState(newValue[0].bookCount || '');
    const[bookDescription, setBookDescription] = useState(newValue[0].bookDescription || '');
    const[bookId, setBookId] = useState(newValue[0].bookId || '');
    const[bookName, setBookName] = useState(newValue[0].bookName || '');

    const dispatch = useDispatch();

    function onClickOfSubmit(){
       const value= {bookAuthor, bookCount, bookDescription, bookId, bookName};
       const id = newValue.bookId;
        dispatch(editData(value,id));
        setEditableId(false);
    }

    return (
        <>{
        editableId ?
        <div>
        <p>Book Author: </p>
        <input type="text" value={bookAuthor} onChange={(e) => setBookAuthor(e.target.value)}></input>
        <br />
        <p>Book Count: </p>
        <input type="text" value={bookCount} onChange={(e) => setBookCount(e.target.value)}></input>
        <br />
        <p>Book Description: </p>
        <input type="text" value={bookDescription} onChange={(e) => setBookDescription(e.target.value)}></input>
        <br />
        <p>Book Id: </p>
        <input type="text" value={bookId} onChange={(e) => setBookId(e.target.value)}></input>
        <br />
        <p>Book Name: </p>
        <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)}></input>
        <br />
        <button onClick={() => onClickOfSubmit()}>Submit</button>
        </div> : (<></>)}
        </>
    )
}

export default MyData;