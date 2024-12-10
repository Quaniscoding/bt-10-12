import React, { useState } from "react";

const Checkout = ({ cart, onPlaceOrder, onCancel }) => {
    const [customerInfo, setCustomerInfo] = useState({
        name: "",
        address: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomerInfo({ ...customerInfo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!customerInfo.name || !customerInfo.address || !customerInfo.phone) {
            alert("Vui lòng điền đầy đủ thông tin!");
            return;
        }
        onPlaceOrder(customerInfo);
    };

    return (
        <div className="checkout">
            <h2>Thông tin đặt hàng</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Họ và tên"
                    value={customerInfo.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Địa chỉ"
                    value={customerInfo.address}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Số điện thoại"
                    value={customerInfo.phone}
                    onChange={handleChange}
                />
                <button type="submit">Xác nhận đặt hàng</button>
                <button type="button" onClick={onCancel}>
                    Hủy
                </button>
            </form>
        </div>
    );
};

export default Checkout;
