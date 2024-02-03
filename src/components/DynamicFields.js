// src/components/DynamicFields.js
import React, { useState } from 'react';

const DynamicFields = ({ fields, onFieldAdd }) => {
  const [fieldName, setFieldName] = useState('');
  const [fieldType, setFieldType] = useState('Text');
  const [fieldValidation, setFieldValidation] = useState('');
  const [fieldData, setFieldData] = useState('');

  const handleAddField = () => {
    onFieldAdd({ fieldName, fieldType, fieldValidation, fieldData });
    setFieldName('');
    setFieldValidation('');
    setFieldData('');
  };

  return (
    <div>
      <h2>Add Fields Dynamically</h2>
      <div>
        <label>Field Name:</label>
        <input type="text" value={fieldName} onChange={(e) => setFieldName(e.target.value)} />
      </div>
      <div>
        <label>Field Type:</label>
        <select value={fieldType} onChange={(e) => setFieldType(e.target.value)}>
          <option value="Text">Text</option>
          <option value="DropDown">DropDown</option>
          <option value="DatePicker">DatePicker</option>
        </select>
      </div>
      <div>
        <label>Field Validation:</label>
        <input type="text" value={fieldValidation} onChange={(e) => setFieldValidation(e.target.value)} />
      </div>
      <div>
        <label>Field Data (Dropdown):</label>
        <input type="text" value={fieldData} onChange={(e) => setFieldData(e.target.value)} />
      </div>
      <button onClick={handleAddField}>Add Field</button>
    </div>
  );
};

export default DynamicFields;
