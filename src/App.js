import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import NavBar from './components/NavBar';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
				<Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/new-project" element={<NewProject />} />
        </Routes>
				</Container>
      </Router>
    </div>
  );
}

export default App;
