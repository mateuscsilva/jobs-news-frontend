import './App.css';
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Main from '../Main/Main';
import api from '../../utils/api';

function App() {

  useEffect(() => {
    api.getJobs(1).then((res) => {
      //console.log(res);
    })

    api.getJobById(11371161).then((res) => {
      //console.log(res);
    })
  }, []);


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
