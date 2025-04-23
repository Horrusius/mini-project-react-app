import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import RentalList from './components/RentalList'

import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <div className='main'>
        <Sidebar />
        <RentalList />
      </div>
      <Footer />
    </>
  );
}

export default App
