import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import deleteCard from "./action/index1";
import EditForm from "./component/EditForm";
import AddForm from "./component/AddForm";

const App = () => {
    const [isEdit, isSetEdit] = useState(false);
    const [isAdd, isSetAdd] = useState(false);
    const [value1, setNewValue1] = useState('');
    const dispatch = useDispatch();
    const value = useSelector(state => state.values);

    function onDelete(id) {
        dispatch(deleteCard(id));
        isSetEdit(false);
        isSetAdd(false);
    }

    function onEdit(id) {
        isSetEdit(true);
        isSetAdd(false);
        let newValue = value.filter(f => f.id == id);
        setNewValue1(newValue);
    }

    function onAdd() {
        isSetAdd(true);
    }

    return(
        <>
        {value.map((val)=> (
            <>
            <p>{val.frienshipQuotes}</p>
            <button onClick={() => onEdit(val.id)}>Edit</button>
            <button onClick={() => onDelete(val.id)}>Delete</button>
            <button onClick={() => onAdd()}>Add</button>
            <hr />
            {isEdit && val.frienshipQuotes==value1[0].frienshipQuotes && <EditForm value1={value1} isSetEdit={isSetEdit}/>}
            {isAdd && <AddForm isSetAdd={isSetAdd}/>}
            </>
        ))}
        
        
        </>
    )
}

export default App;