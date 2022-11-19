import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./components/Header";

function App() {
  return (
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
  );
}

export default App;
