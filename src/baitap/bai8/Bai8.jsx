import React, { useState } from 'react'
import Checkout from './CheckOut';
import ProductsList from './ProductsList';
import Cart from './Cart';
import './bai8.css'
export default function Bai8() {
    const [cart, setCart] = useState([]);
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    // Thêm sản phẩm vào giỏ hàng
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    // Xóa sản phẩm khỏi giỏ hàng
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    // Đặt hàng
    const placeOrder = (customerInfo) => {
        console.log("Order placed:", customerInfo, cart);
        alert("Đơn hàng đã được đặt thành công!");
        setCart([]); // Xóa giỏ hàng sau khi đặt hàng
        setIsCheckingOut(false);
    };
    return (
        <div className="bai8">
            <h1>Simple E-commerce App</h1>
            {isCheckingOut ? (
                <Checkout cart={cart} onPlaceOrder={placeOrder} onCancel={() => setIsCheckingOut(false)} />
            ) : (
                <>
                    <ProductsList onAddToCart={addToCart} />
                    <Cart
                        cart={cart}
                        onRemoveFromCart={removeFromCart}
                        onCheckout={() => setIsCheckingOut(true)}
                    />
                </>
            )}
        </div>
    )
}
