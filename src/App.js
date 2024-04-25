import logo from './logo.svg';
import User from './User';

import './App.css';


function App() {
  const mydata = {
    'name': 'sanjay kumar',
    'profile':'laravel developer'
  }
  return (
    <div className="App">
      <User data={mydata} />
    </div>
  );
}

export default App;
