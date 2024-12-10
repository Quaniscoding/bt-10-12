import React from "react";

const Cart = ({ cart, onRemoveFromCart, onCheckout }) => {
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Giỏ hàng</h2>
            {cart.length === 0 ? (
                <p>Giỏ hàng đang trống</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <h3>{item.name}</h3>
                            <p>
                                Giá: {item.price.toLocaleString()} VND x {item.quantity}
                            </p>
                            <button onClick={() => onRemoveFromCart(item.id)}>Xóa</button>
                        </div>
                    ))}
                    <h3>Tổng tiền: {totalPrice.toLocaleString()} VND</h3>
                    <button onClick={onCheckout}>Đặt hàng</button>
                </>
            )}
        </div>
    );
};

export default Cart;
