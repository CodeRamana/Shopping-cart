const List = ({ product, cartDispatch }) => {
    const handleCart = (type,item) => {
        switch(type){
            case "ADDCOUNT":{
                const updated = {...item,qty:(item.qty < 1 ? 1 : item.qty + 1 )}
                cartDispatch({ type, payload: {...updated} })
                break;
            }
            case "REDUCECOUNT":{
                const updated = {...item,qty:(item.qty <=1 ? 1 : item.qty - 1 )}
                cartDispatch({ type, payload: {...updated} })
                break;
            }
            case "REMOVE":{
                cartDispatch({ type, payload: item })
                break;
            }      
        }  
    }
    
    return (
        <div key={product.id} className="list">
            <div className="list-left">
                <img src={product.image} alt={product.category} className="list-img" />
                <div className="list-details">
                    <p className="title">{product.title}</p>
                    <div className="input-action">
                    <button className="count-btn" onClick={()=>handleCart("ADDCOUNT", product)}>+</button>
                    <input type="text" className="qty-input" value={product.qty} onChange={(e)=>e}/>
                    <button className="count-btn" onClick={()=>handleCart("REDUCECOUNT", product)}>-</button>
                </div>
                </div>
                
            </div>

            <div className="list-right">
                <button className="remove-btn" onClick={() => handleCart("REMOVE",product)}><span className="material-symbols-outlined">
                    close
                </span></button>
            </div>

        </div>
    )
}

export default List