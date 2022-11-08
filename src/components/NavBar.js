import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    
      <nav>
      <div className="navbar">
        <ul>
            <li> <Link to="/Link">Link</Link> </li>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/About">About</Link> </li>
        </ul>
    </div>
    </nav>
  );
}
export default NavBar