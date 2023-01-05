import React, { useEffect, useState } from 'react';

export const FormContext = React.createContext();

function FormProviderComponent({ children }) {
  const [formData, setFormData] = useState({});
  const [isNext, setIsNext] = useState(true);
  const [finish, setFinish] = useState(false);

  const [sendDataState, setSendDataState] = useState(false);

  const onNext = () => setIsNext(true);
  const onPrev = () => setIsNext(false);

  const updateFields = (data, sendData = false) => {
    if (sendData) {
      setSendDataState(true);
    }

    setFormData((prev) => ({ ...prev, ...data }));
  };

  useEffect(() => {
    if (sendDataState) {
      console.log('Sending Form: ', formData);
      sendForm();
    }
  });

  for (const property in formData) {
    if (property === 'had_vaccine' || property === 'had_antibody_test') {
      formData[property] = JSON.parse(formData[property]);
    }
    if (property === 'number_of_days_from_office') {
      formData[property] = parseInt(formData[property]);
    }
  }
  const sendForm = () => {
    fetch('https://covid19.devtest.ge/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        localStorage.clear();
        setFinish(false);

        return response.text();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <FormContext.Provider
      value={{
        sendForm,
        formData,
        setFormData,
        updateFields,
        isNext,
        onNext,
        onPrev,
        setFinish,
        finish,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormProviderComponent;
