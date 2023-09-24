import { Link } from 'react-router-dom';

import LinkItem from "./LinkItem";
import LogoNavBar from "./LogoNavBar";

import "./NavBar.scss";

const NavBar = () => {
	return (
		<nav>
			<Link to="/" >
				<LogoNavBar></LogoNavBar>
			</Link>
			<ul>
				<LinkItem to="/" content="Home" />
				<LinkItem to="/contact" content="Contact" />
				<LinkItem to="/company" content="Company" />
				<LinkItem to="/new-project" content="New Project" />
			</ul>
		</nav>
	);
};

export default NavBar;
