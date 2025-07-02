import { useEffect, useState ,useReducer} from "react";
import ProductCard from "../components/ProductCard";
import CartReducer from "../reducers/CartReducer";
import NavBar from "../components/NavBar";
import Modal from "../components/Modal";

const Products = () => {

    const [products,setProducts]=useState([])
    const [openModel,setOpenModel] = useState(false)

    const fetchProducts = async () =>{
        try{
            const response = await fetch("https://fakestoreapi.com/products");
            const products = await response.json();
            setProducts(products)
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchProducts()
    },[]);

  
   const [cart,cartDispatch] = useReducer(CartReducer,{totalCartItems:0,cartItems:[]})

    return(
        <>
         <NavBar cart={cart} setOpenModel={setOpenModel} />
          <main className="products-grid">
            {products.map((product)=><ProductCard key={product.id} product={product} cartDispatch={cartDispatch} cart={cart} />)}
            {(openModel && cart['totalCartItems'] > 0 ) && <Modal  setOpenModel={setOpenModel} cartDispatch={cartDispatch} cart={cart['cartItems']}/>}
        </main>
        </>
       
    );
}

export default Products;