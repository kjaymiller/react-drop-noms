import React from 'react';
import logo from './logo.svg';
import './App.css';
import DropZone from "./dropzone/DropZone";

function App() {
  return (
    <div>
      <p className="title">Draggin' and Droppin'</p>
      <div className="content">
        <DropZone />
      </div>
    </div>
  )
}

export default App;
