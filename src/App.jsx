import './App.css';
import React, { useState, useEffect } from 'react';
import FormPhone from './Components/FormPhone';

function App() {
  const [phoneStatus, setPhoneStatus] = useState({});

  function onSubmit(res) {
    setPhoneStatus(res);
  }

  useEffect(() => {
    console.log('from app.js', phoneStatus);
  }, [phoneStatus]);
  return (
    <div className="App">
      <FormPhone onPhoneSubmit={onSubmit} />
    </div>
  );
}

export default App;
