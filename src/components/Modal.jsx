import List from "./List";

const Modal = ({ cartDispatch, cart, setOpenModel }) => {
    return (
        <div className="modal">
            <div>
                <button className="btn" onClick={() => setOpenModel(false)}><span className="material-symbols-outlined">
                    close
                </span></button>
            </div>
            {cart.map((product) => <List key={product.id} product={product} cartDispatch={cartDispatch} />)}
        </div>
    );
}

export default Modal;