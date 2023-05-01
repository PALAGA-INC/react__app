import React from 'react';
import Controllers from './components/Controllers';
import { DataProvider } from './GlobalState';
import './components/styles/App.css'



function App() {
  return (

    <DataProvider>
        <div className="App">
            <Controllers/>
        </div>
    </DataProvider>

  );
}

export default App;
