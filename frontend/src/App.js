import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Header2 from "./components/Header2"
import Footer from "./components/Footer"

function App() {
  return (
    <div className='App'>
      <Header2/>
      <Footer/>
    </div>
  );
}

{/*}
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  */}

export default App;
