import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';
import TeamList from './components/TeamList';

function App() {
  return (
    <div>
      <Form />
      <TeamList />  
    </div>
  );
}

export default App;
