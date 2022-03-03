import { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './assets/main.css';
import './assets/chrome-bug.css';

import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Experience from './pages/experience/Experience';
import Services from './pages/services/Services';
import Portfolio from './pages/portfolio/Portfolio';
import Testimonials from './pages/testimonials/Testimonials';
import Footer from './components/footer/Footer';

const App = (): ReactElement => {
	return (
		<>
			<Header />
			<Nav />
			<About />
			<Experience />
			<Services />
			<Portfolio />
			<Testimonials />
			<Contact />
			<Footer />

			{/* <BrowserRouter>
				<Routes>
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</BrowserRouter> */}
		</>
	);
};

export default App;
