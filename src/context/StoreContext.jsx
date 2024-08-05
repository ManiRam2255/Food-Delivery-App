//: Sets up a context to provide food_list to the component tree.
//Purpose: StoreContextProvider provides the food_list data to the components that need it via context.
//Context Creation: createContext(null) creates a new context object (StoreContext), with null as the default value.
//Provider Component: StoreContextProvider uses the StoreContext.Provider to pass food_list to its child components. This allows any component inside StoreContextProvider to access food_list through the StoreContext.
//Usage: Wrap your main application component with StoreContextProvider to make food_list available throughout the component tree.
import {createContext, useEffect, useState} from "react"
import {food_list} from "../assets/assets"
export const StoreContext=createContext(null)// Components can use this context to access shared state.

const StoreContextProvider=(props)=>{

    const [cartItems,setCartItems]=useState({});

    const addToCart=(itemId)=>{
        if(!cartItems[itemId])//product id is not avibaleble in cart item
        {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo=food_list.find((product)=>product._id === item);
                totalAmount+=itemInfo.price*cartItems[item];
            }
        }
        return totalAmount;
    }

//An object containing the values to be provided by the context.
    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
//: Wraps the child components in StoreContext.Provider, making contextValue available to all child components.
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider



//(prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }): This is a function that takes the previous state (prev) and returns a new state object. Let’s break it down:

//prev: Represents the current state of cartItems before the update.

//{ ...prev, [itemId]: prev[itemId] + 1 }: This expression creates a new object by:

//...prev: Using the spread operator to copy all existing key-value pairs from prev into a new object. This ensures that all current cart items are retained in the new state.
//[itemId]: prev[itemId] + 1: Updating the value for the key itemId. The value is set to prev[itemId] + 1, which increments the current quantity of the item.