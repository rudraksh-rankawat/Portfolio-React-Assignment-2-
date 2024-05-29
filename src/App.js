import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar.js";
import Typing from './Typing.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar />
        
      </header>

      <Typing
          text={[
            "Hello, I am Rudraksh Rankawat",
            "Welcome to my crazy portfolio!!",
            "Here you can see my projects and contact me ;)",
          ]}
          typingSpeed={100}
        deletingSpeed={50}
        duration={1000}
        
        />
    </div>
  );
}

export default App;
