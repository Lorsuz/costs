import { Link } from 'react-router-dom';

function NavBar({to, content}) {
    return (
        <li>
            <Link to={to}>{content}</Link>
        </li>
    )
}
export default NavBar;