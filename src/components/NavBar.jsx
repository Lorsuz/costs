import Link from "./Link";
function NavBar() {
    return (
        <ul>
            <Link to="/" content="Home"/>
            <Link to="/contact" content="Contact"/>
            <Link to="/company" content="Company"/>
            <Link to="/new-project" content="New Project"/>
        </ul>
    )
}
export default NavBar;