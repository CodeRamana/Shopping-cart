import { useNavigate } from "react-router";

const NavBar = ({ cart }) => {
    const navigate = useNavigate()
    return (
        <header>
            <nav>
                <p className="logo" onClick={() => navigate('/')}>ShopSmart</p>
                <div className="nav-right">
                    <button className="btn" onClick={(cart['totalCartItems'] !== 0)?() => navigate('/carts'):null}><span className="material-symbols-outlined">
                        shopping_cart
                    </span></button>
                    {(cart['totalCartItems'] !== 0) && <p className="count">{cart.totalCartItems}</p>}

                </div>
            </nav>
        </header>
    );
}

export default NavBar;