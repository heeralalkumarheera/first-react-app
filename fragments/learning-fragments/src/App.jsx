import React from 'react';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return <React.Fragment>//instead of using div to wrap the elements, we can use React.Fragment or <> </> to wrap the elements
  <h1>Healthy Foods</h1>
    <ul className="list-group">
      <li className="list-group-item">Dal</li>
      <li className="list-group-item">Salad</li>
      <li className="list-group-item">Fruits</li>
      <li className="list-group-item">Vegetables</li>
      <li className="list-group-item">Roti</li>
    </ul>
  </React.Fragment>
}

export default App;
