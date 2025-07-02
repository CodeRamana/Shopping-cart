

const ProductCard = ({ product, cartDispatch, cart }) => {
    const handleCart = (item) => {

        if (!cart['cartItems'].find((product) => product.id === item.id)) {
            cartDispatch({ type: "ADD", payload: item })
        }
        else {
            alert("This Product is Already Added to the Cart")
        }

    }

    return (
        <div key={product.id} className="product-items">
            <img src={product.image} alt={product.category} />
            <div className="product-details">
                <div className="product-header">
                    <p className="title">{product.title}</p>
                </div>
                <div className="product-footer">
                    <p className="price">Rs: {product.price}</p>
                    <button className="btn" onClick={() => handleCart(product)}><span className="material-symbols-outlined">
                        shopping_cart
                    </span> Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard