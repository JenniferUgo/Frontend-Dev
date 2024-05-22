import "./App.css";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NewBlog from "./Pages/NewBlog";


function App() {
  return (
    <div className="App-Component">

      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/create' element={ <NewBlog /> } />
          <Route path='/' element={ <Home /> } />
        </Routes>
      </BrowserRouter>


      <Footer /> 
    </div>
  );
}

export default App;
