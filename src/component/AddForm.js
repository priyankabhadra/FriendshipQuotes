import React, { useState } from "react";
import addCart from "../action/index3";
import { useDispatch } from "react-redux";

const AddForm = ({isSetAdd}) => {
    const [frienshipQuotes, setfrienshipQuotes] = useState('');
    const dispatch = useDispatch();

    function onsubmit() {
        const val = {frienshipQuotes};
        dispatch(addCart(val));
        isSetAdd(false);
    }
    return(
        <>
        <p>Fill your quotes for friend here: </p>
        <input type="text" value={frienshipQuotes} onChange={(e) => setfrienshipQuotes(e.target.value)}></input>
        <button onClick={() => onsubmit()}>Submit</button>
        </>
    )
}

export default AddForm;