import React, { useState } from 'react';

export const FormContext = React.createContext();

function FormProviderComponent({ children }) {
  const [formData, setFormData] = useState();

  const updateFields = (data) => {
    setFormData({ ...formData, ...data });
  };

  const sendForm = () => {
    fetch('https://covid19.devtest.ge/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <FormContext.Provider value={{ updateFields, sendForm, formData }}>
      {children}
    </FormContext.Provider>
  );
}

export default FormProviderComponent;
