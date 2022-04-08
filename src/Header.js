import './App.css';
import logo from './logo.svg';


export default function Header() {
    return(
        <header className="App-header p-4 d-flex justify-content-between">
          <img className="react-logo" src={logo} alt="logo" />
          <h3 className="mt-2 pe-lg-4 mt-lg-5 fs-6 fs-lg-5">React Course - Project 1</h3>
        </header>
    )
  }