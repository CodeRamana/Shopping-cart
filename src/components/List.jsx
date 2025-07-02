const List = ({ product, cartDispatch }) => {
    const handleCart = (item) => {
        cartDispatch({ type: "REMOVE", payload: item })
    }
    return (
        <div key={product.id} className="list">
            <img src={product.image} alt={product.category} className="list-img" />
            <p className="title">{product.title}</p>
            <div>
                <button className="btn" onClick={() => handleCart(product)}><span className="material-symbols-outlined">
                    delete
                </span></button>
            </div>

        </div>
    )
}

export default List