import { Cart, Person } from 'react-bootstrap-icons';
import { Link,Switch } from 'react-router-dom';
const Navbar = () =>{
return (
    <>

<nav className="navbar navbar-expand-lg navbar-expand-sm navbar-expland-md navbar-dark bg-dark">
    <a href = "#" className="navbar-brand">
    <img src="././logo.jpeg"></img>
    </a>
    <ul className="nav navbar-nav">
      <li><a href="#" className='navbar-text'>Link1</a></li>
    </ul>

    <span className='ms-auto'>
    {/* <a href="#" className="nav navbar-nav navbar-right"> */}
    <Link to="/cart">
    <Cart className="iconstyle" color="white" size={30}></Cart>
    </Link>
    {/* </a> */}
    <Link to="/createlisting">
    <Person color="white" size={30}></Person>
    </Link>
    </span>
</nav>
    </>
)
}
export default Navbar;