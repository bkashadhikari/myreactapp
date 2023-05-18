import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import About from './components/About';
function App() {
  return (
    <>
  <Navbar name1="Home" name2="About" name3="Contact"/>
  {/* <TextForm yourself="About Yourself"/> */}
  <About/>
  </>
  );
}

export default App;
