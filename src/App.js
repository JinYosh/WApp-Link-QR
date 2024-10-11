import './App.css';
import Header from './components/header';
import FormBox from './components/formBox';
import PageNotFound from './components/pageNotFound';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <FormBox />
            </>
          }
          />
          <Route path="*" element={
            <>
              <PageNotFound />
            </>
          }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
