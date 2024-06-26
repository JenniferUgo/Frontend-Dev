import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewPost from "./Pages/NewPost";
import PostView from "./Pages/PostView";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="App-Component">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<NewPost />} />
          <Route path="/postview/:id" element={<PostView />} />
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
