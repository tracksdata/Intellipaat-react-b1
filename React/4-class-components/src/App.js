import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Employee from './components/Empoyee';

const App = () => {
  return (
    <div className="container">
      <div className="alert alert-info text-center">
        <h1>App Component</h1> 
      </div>
      <hr/>
      <Employee />
    </div>
  );
};

export default App;