import React from "react";

const products = [
    { id: 1, name: "Áo Thun", price: 200000 },
    { id: 2, name: "Quần Jeans", price: 500000 },
    { id: 3, name: "Giày Sneaker", price: 1500000 },
];

const ProductsList = ({ onAddToCart }) => {
    return (
        <div className="product-list">
            <h2>Danh sách sản phẩm</h2>
            {products.map((product) => (
                <div key={product.id} className="product-item">
                    <h3>{product.name}</h3>
                    <p>Giá: {product.price.toLocaleString()} VND</p>
                    <button onClick={() => onAddToCart(product)}>Thêm vào giỏ</button>
                </div>
            ))}
        </div>
    );
};

export default ProductsList;
