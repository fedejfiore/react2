import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav style={{dispaly: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h1>Ecommerce</h1>
            <section>
                <Link to="/category/celular"> Celulares </Link>
                <Link to="/category/tablet"> Tablets </Link>
                <Link to="/category/computadoras"> Computadoras </Link>
            </section>
            <CartWidget/>
        </nav>
        
        );
}

export default NavBar