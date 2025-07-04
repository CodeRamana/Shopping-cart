import { useEffect, useMemo } from "react";
import List from "../components/List";
import { useNavigate } from "react-router";

const Carts = ({cart,cartDispatch}) =>{

    const navigate = useNavigate()

    useEffect(()=>{
        if(cart["cartItems"].length === 0) navigate("/");
    },[cart])

    const total = useMemo(()=>{
        return cart['cartItems'].reduce((p,c)=> {
        p = p + (c['qty'] * c["price"]);
        return p
    },0)
    },[cart])

    return(
        <div className="cart-section">
            <div className="cartItems">
            {cart['cartItems'].map((product) => <List key={product.id} product={product} cartDispatch={cartDispatch} />)}
            </div>
            <div className="summary">
                <p>Order summary</p>
                <div>
                    <p className="sub-description">Subtotal</p>
                    <p className="sub-amount">{Math.round(total)}</p>
                </div>
                <hr />
                <div>
                    <p className="sub-description">Discount (10%)</p>
                    <p className="sub-amount">{Math.round(total * 0.1)} </p>
                </div>
                <hr />
                <div className="grand-total">
                    <p >Total</p>
                    <p>{Math.round((Math.round(total)-Math.round(total * 0.1)))}</p>
                </div>
                
                <button className="btn">Checkout</button>
            </div>
        </div>
    );
}

export default Carts;