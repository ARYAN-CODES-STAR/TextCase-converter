import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import About from './components/About';

function App() {
  return (
    <>

<Navbar title="Text Converter"/>

<div className="container my-3">
<TextForm heading= "Enter text to be uppercased"/>
<About/>
</div>

    
        
    </>
  

  );
}

export default App;
