import React, {useState} from 'react';
import Radio from '@material-ui/core/Radio';
import submitData from './action/index';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const[fullName, setFullName] = useState('');
  const[rollNo, setRollNo] = useState('');
  const[selectedValue, setSelectedValue] = React.useState('yes');
  const[value, setValue] = useState(false);
  const[firstValue, setFirstValue] = useState(true);
  const dispatch = useDispatch();
  let fullNameAgain = null, selectedValueAgain = null;
  fullNameAgain = useSelector(state => state.fullName);
  selectedValueAgain = useSelector((state) => state.selectedValue);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  function onSubmit(){
    const value = 
       {fullName, rollNo, selectedValue} 
       dispatch(submitData(value));  
       setValue(true);
       setFirstValue(false);
  }
  console.log(fullNameAgain);
  console.log(selectedValueAgain);

  return (
    <>
    {firstValue ? (<>
    <h2>Attandance Sheet</h2>
    <h3>Please Fill This Form</h3>
    <p>Full Name: </p>
    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required></input>
    <br/>
    <p>Roll No: </p>
    <input type="number" value={rollNo} onChange={(e) => setRollNo(e.target.value)} required></input>
    <br/>
    <p>Are you available today?</p>
    Yes<Radio
        checked={selectedValue === 'yes'}
        onChange={handleChange}
        value="yes"
      />
     No<Radio
        checked={selectedValue === 'no'}
        onChange={handleChange}
        value="no"
      />
    <br/>
    <button onClick={() => onSubmit()}>Submit</button>
      </>): (<> {fullNameAgain && selectedValueAgain && value &&
        <p>{fullNameAgain}, {selectedValueAgain} present</p>
      }</>)}
    </>
  )
}

export default App;