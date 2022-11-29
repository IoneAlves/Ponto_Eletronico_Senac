import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import { useState } from 'react';
import UserContext from './userContext';

function App() {
  const [value, setValue] = useState(null);
  return (
    <div className="App">
        <UserContext.Provider value={{value, setValue}}>
          <Routes />
        </UserContext.Provider>
    </div>
  );
}

export default App;
