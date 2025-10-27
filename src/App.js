import React from 'react';
import CompteList from './components/CompteList';
import CompteForm from './components/CompteForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <CompteForm />
      <CompteList />
    </div>
  );
}

export default App;