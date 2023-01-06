import './App.css';
import './Appmedia1000px.css';
import LandingPage from "./components/landingPage";
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <article>
      <LandingPage />
    </article>
    </BrowserRouter>
    
  )
}

export default App;