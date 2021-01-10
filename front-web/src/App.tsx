
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Hello from './Hello';
import Counter from './Counter';
import NavBar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Routes from './Routes';

function App() {
  return (
      <>
      <Routes />
      <ToastContainer/>
      </>

  );
}

export default App;
