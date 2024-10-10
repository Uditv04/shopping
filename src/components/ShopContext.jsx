import React, { createContext, useState, useEffect } from 'react';
import all_product from '../../public/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;  // set each product in the cart with a value of 0
    }
    return cart;
};

const ShopContextProvider = (props) => {
    // Initialize the cartItems state by checking localStorage first
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : getDefaultCart();
    });

    // Add to cart
    const addToCart = (itemID) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev, [itemID]: prev[itemID] + 1 };
            return updatedCart;
        });
    };

    // Remove from cart
    const removeFromCart = (itemID) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev, [itemID]: prev[itemID] - 1 };
            return updatedCart;
        });
    };

    // Calculate total cart amount
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    // Save cartItems to localStorage whenever cartItems state changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);


    const getTotalCartItems =()=>{
        let totalItem=0
        for(const items in cartItems){
            if (cartItems[items] > 0){
totalItem += cartItems[items]
            }
        }
        return totalItem
    }

    const contextValue = {getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
