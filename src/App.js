import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import MyData from './component/myData'
import deleteData from './action/index';
import MyForm from "./component/myForm";

const App = () => {
  const value = useSelector((state) => state.bookDetails);
  const dispatch = useDispatch();
  const[newValue, setNewValue] = useState(null);
  const [editableId, setEditableId] = useState(false);
  const[addId, setAddId] = useState(false);

  function onClickEditableButton(id) {
    const newVal = value.filter(m => id === m.bookId);
    setNewValue(newVal); 
    setEditableId(true);
    setAddId(false);
  }

  function onClickDeletableButton(id) {
    setEditableId(false);
    setAddId(false)
    dispatch(deleteData(id));
  }

  function onClickAddButton() {
    setAddId(true);
  }

  return (
    <>
      {value.map((val) => (
        <>
         <div>
          <h4>{val.bookName}</h4>
          <h6>{val.bookAuthor}</h6>
          <p>{val.bookDescription}</p>
          <button onClick={() =>onClickEditableButton(val.bookId)}>Edit</button>
          <button onClick={() => onClickDeletableButton(val.bookId)}>Delete</button>
          <button onClick={() => onClickAddButton()}>Add Book</button>
          </div>
          <hr />
          {editableId==val.bookId && <MyData
          newValue={newValue}
          editableId= {editableId}
          setEditableId={setEditableId}
     />}
     <hr />
     {addId &&
     <MyForm addId={addId} setAddId={setAddId}
     />}
        </>
      ))}
    </>
  );
};

export default App;
