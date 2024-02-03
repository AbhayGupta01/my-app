// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DynamicFields from './components/DynamicFields';
import DisplayFields from './components/DisplayFields';

const App = () => {
  const fields = useSelector((state) => state.fields);
  const dispatch = useDispatch();

  const addField = (field) => {
    dispatch({ type: 'ADD_FIELD', payload: field });
  };

  return (
    <div>
      <DynamicFields fields={fields} onFieldAdd={addField} />
      <DisplayFields fields={fields} />
    </div>
  );
};

export default App;
