import React, { useState } from "react";
import editCard from "../action/index2";
import { useSelector, useDispatch } from "react-redux";


const EditForm = ({value1, isSetEdit}) => {
    // console.log(value1);
    const dispatch = useDispatch();
    const[frienshipQuotes, setfrienshipQuotes] = useState(value1[0].frienshipQuotes || '');
    let id = value1[0].id;

    function onsubmit() {
        isSetEdit(false);
        const newVal= {frienshipQuotes, id};
        dispatch(editCard(newVal))
    }

    return (
        <>
        <p>Please Updates Quote Here: </p>
        <input type="text" value={frienshipQuotes} onChange={(e) => setfrienshipQuotes(e.target.value)}></input>
        <button onClick={() => onsubmit()}>Submit</button>
        </>
    )
}

export default EditForm;