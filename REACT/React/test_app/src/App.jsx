import './App.css'
import Navbar from './components/Navbar'
import Articles from './components/Articles'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {
 

  return (
    <div className='App-Component'>
      <Navbar />
      <Articles />
      <Sidebar />
      <Footer /> 
    </div>
  )
}

export default App
