import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const CART_STORAGE_KEY = "pinguin-shop-cart";


function loadInitialCart() {
    try {
        const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);
        return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
        console.warn("Warenkorb konnte nicht geladen werden", error);
        return [];
    }
}


export function CartProvider({ children }) {
    /*const [items, setItems] = useState([]);*/
    const [items, setItems] = useState(loadInitialCart);
    
    useEffect(() => {
        try {
            window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
        } catch (error) {
            console.warn("Warenkorb konnte nicht gespeichert werden", error);
        }
    }, [items]);
    
    function addItem(product) {
      setItems((currentItems) => {
        const existingItem = currentItems.find((item) => item.id === product.id);

        /* Wenn der Gegenstand bereits im Warenkorb ist */
        if (existingItem) {
            return currentItems.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
        }
        return [...currentItems, {...product, quantity: 1}];
      });
    }

    function removeItem(productId) {
        setItems((currentItems) => currentItems.filter((item) => item.id !== productId))
    }

    function increaseQuantity(productId) {

    }

    function decreaseQuantity(productId) {

    }

    function clearCart() {
        setItems([]);
    }


    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const value = useMemo(
      () => ({
        items,
        totalQuantity,
        totalPrice,
        addItem,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }),
      [items, totalQuantity, totalPrice]
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart muss innerhalb des CartProvicers verwendet werden.");
    }
    return context;
}