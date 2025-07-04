import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
import { useLoaderData } from "react-router";

const Products = ({cart,cartDispatch,setOpenModel,openModel}) => {  
    const products =useLoaderData()
    return(
          <div className="products-grid">
            {products.map((product)=><ProductCard key={product.id} product={product} cartDispatch={cartDispatch} cart={cart} />)}
            {(openModel && cart['totalCartItems'] > 0 ) && <Modal  setOpenModel={setOpenModel} cartDispatch={cartDispatch} cart={cart['cartItems']}/>}
        </div>
       
    );
}

export default Products;