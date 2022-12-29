import React from 'react';

export const FormContext = React.createContext();

function FormProviderComponent({ children }) {
  let formData = {};

  const printData = function () {
    console.log('Form Data', formData);
  };

  function updateFields(data) {
    formData = { ...formData, ...data };
    console.log(formData);
  }

  return (
    <FormContext.Provider value={{ printData, updateFields }}>
      {children}
    </FormContext.Provider>
  );
}

export default FormProviderComponent;
