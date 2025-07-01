import {Link} from "react-router-dom"

function  Navbar({cartCount}){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h2>emobilis shop</h2>
            <div>
                <Link to="/">Home</Link> |{" "}
                <Link to="/cart">Cart({cartCount})</Link>
            </div>

        </nav>
    );


}
export default Navbar;