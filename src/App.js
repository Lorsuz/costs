import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';

import Header from './components/partials/Header/Header';
import Footer from './components/partials/Footer/Footer';
import Container from './components/container/Container';

function App () {
	return (
		<Router>
			<Header></Header>
			<Container>
				<Routes>
					<Route path="/" element={ <Home /> } />
					<Route path="/contact" element={ <Contact /> } />
					<Route path="/company" element={ <Company /> } />
					<Route path="/new-project" element={ <NewProject /> } />
				</Routes>
			</Container>
			<Footer></Footer>
		</Router>
	);
}

export default App;
