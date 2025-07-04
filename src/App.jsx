import "./App.css"
import Products from "./pages/Products";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router";
import Carts from "./pages/Carts";
import fetchProducts from "./loaders/fetchProducts";
import CartReducer from "./reducers/CartReducer";
import { useReducer, useState } from "react";
const App = () => {
  const [openModel,setOpenModel] = useState(false)
  const [cart,cartDispatch] = useReducer(CartReducer,{totalCartItems:0,cartItems:[]})

  const router = createBrowserRouter( [{
    path: "/",
    element: <Home cart = {cart} setOpenModel = {setOpenModel} />,
    children: [
            {
                path: "/",
                element: <Products cart = {cart} cartDispatch = {cartDispatch} openModel= {openModel} setOpenModel = {setOpenModel} />,
                loader:fetchProducts,
                hydrateFallbackElement:<h1>Loading</h1>,
            },
            {
              path:"/carts",
              element:<Carts cart = {cart} cartDispatch = {cartDispatch}/>
            }
        ]
  }], {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  })

  return (
    <RouterProvider router={router} future={{
      v7_startTransition: true,
    }} />
  );
}

export default App;