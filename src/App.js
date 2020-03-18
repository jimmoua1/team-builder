import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';
import TeamList from './components/TeamList';

function App() {
  const [ teamMemberList, setTeammemberList] = useState([])

  return (
    <div className="App">
      <Form teamMemberList={teamMemberList} setTeamMemberList={setTeamMemberList} />
      <TeamList teamMemberList={teamMemberList} setTeamMemberList={setTeamMemberList} />
    </div>
  );
}

export default App;
