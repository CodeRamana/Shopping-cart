    const CartReducer = (state,action) => {
        switch(action.type){
            case "ADD":{
                   return {
                        ...state,
                        totalCartItems:state['totalCartItems'] + 1,
                        cartItems:[...state['cartItems'],action.payload]
                    };
            }
            case "REMOVE":
                return {
                        ...state,
                        totalCartItems:(state['totalCartItems'] === 0) ? 0 : state['totalCartItems'] - 1,
                        cartItems:state['cartItems'].filter((item)=>item.id !== action['payload']['id'])
                    };  
            default:
                return state;  
        }

    }

    export default CartReducer;