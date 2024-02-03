// src/components/DisplayFields.js
import React from 'react';

const DisplayFields = ({ fields }) => {
  return (
    <div>
      <h2>Display Added Fields Dynamically</h2>
      <ul>
        {fields?.map((field, index) => (
          <li key={index}>
            <strong>Field Name:</strong> {field.fieldName}, <strong>Field Type:</strong> {field.fieldType},{' '}
            <strong>Field Validation:</strong> {field.fieldValidation}, <strong>Field Data:</strong> {field.fieldData}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayFields;
