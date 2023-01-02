import React, { useState } from 'react';

export const FormContext = React.createContext();

function FormProviderComponent({ children }) {
  const [formData, setFormData] = useState();
  const [isNext, setIsNext] = useState(true);

  const onNext = () => setIsNext(true);
  const onPrev = () => setIsNext(false);
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
    <FormContext.Provider
      value={{ updateFields, sendForm, formData, isNext, onNext, onPrev }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormProviderComponent;
