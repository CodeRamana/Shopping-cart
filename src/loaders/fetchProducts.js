const fetchProducts = async () =>{
        try{
            const response = await fetch("https://fakestoreapi.com/products");
            const products = await response.json();
            return products;
        }
        catch(err){
            console.log(err)
            return [];
        }
    }

export default fetchProducts;