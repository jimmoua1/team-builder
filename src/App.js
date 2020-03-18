import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';
import TeamList from './components/TeamList';

function App() {
  const [ teamMemberList, setTeammemberList] = useState([])

  return (
    <div className="App">
      <Form />
      <TeamList />  
    </div>
  );
}

export default App;
