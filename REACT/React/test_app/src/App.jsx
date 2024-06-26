import "./App.css";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NewBlog from "./Pages/NewBlog";
import BlogView from './Pages/BlogView'
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="App-Component">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/create' element={ <NewBlog /> } />
          <Route path='/blogview/:id' element={ <BlogView /> } />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>

      <Footer /> 
    </div>
  );
}

export default App;
