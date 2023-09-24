import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
	return (
			<footer className="footer">
				<ul>
					<li><FaFacebook/></li>
					<li><FaInstagram/></li>
					<li><FaLinkedin/></li>
				</ul>
				<p><span>COSTS</span> &copy; 2023 -  Todos os direitos reservados</p>
			</footer>
	);
}

export default Footer;
