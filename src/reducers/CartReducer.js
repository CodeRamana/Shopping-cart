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
                        totalCartItems:(state['totalCartItems'] === 0) ? 0 : state['totalCartItems'] - action['payload'].qty,
                        cartItems:state['cartItems'].filter((item)=>item.id !== action['payload']['id'])
                    }; 
            case "ADDCOUNT":
                return {
                        ...state,
                        totalCartItems:state['totalCartItems'] + 1,
                        cartItems:[...state['cartItems'].filter((item)=>item.id !== action['payload']['id']),action.payload].sort((a,b)=>a.id-b.id)
                } 
            case "REDUCECOUNT":
                const existingItem = state.cartItems.find(item => item.id === action.payload.id);
                console.log((existingItem.qty === action.payload.qty) ? state['totalCartItems'] :state['totalCartItems'] - 1)
                return {
                        ...state,
                        totalCartItems:(state['totalCartItems'] === 0) ? 0 :((existingItem.qty === action.payload.qty) ? state['totalCartItems'] :state['totalCartItems'] - 1),
                        cartItems:[...state['cartItems'].filter((item)=>item.id !== action['payload']['id']),action.payload].sort((a,b)=>a.id-b.id)
                } 
            default:
                return state;  
        }

    }

    export default CartReducer;