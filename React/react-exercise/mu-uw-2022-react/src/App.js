import logo from './logo.svg';
import './App.css';

import DoctorsList from './components/DoctorsList';

function App({ message }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {message}</h1>
        <DoctorsList/> 
      </header>
    </div> 
  );
}

export default App;
