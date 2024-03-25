import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Main from '../Main/Main';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Routes>
       <Route exact path='/jobs' element={<Main/>}/>
       <Route path='/' element={<About/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
