const NavBar = ({ cart, setOpenModel }) => {
    return (
        <header>
            <nav>
                <p className="logo">ShopSmart</p>
                <div className="nav-right">
                    <button className="btn" onClick={() => setOpenModel(cart.totalCartItems > 0 ? true : false)}><span className="material-symbols-outlined">
                        shopping_cart
                    </span></button>
                    {(cart['totalCartItems'] !== 0) && <p className="count">{cart.totalCartItems}</p>}

                </div>
            </nav>
        </header>
    );
}

export default NavBar;