import React from 'react';
import Docs from './components/Docs';
import { app, database } from './firebaseConfig';
import './App.css';

function App() {
  return (
    <div className='docs-main'>
      <Docs database={database} />
    </div>
  );
}

export default App;
