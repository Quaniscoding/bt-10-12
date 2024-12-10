/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'

export default function Bai3() {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')
    function handleChange(e) {
        setInputValue(e.target.value)
    }
    function them(e) {
        e.preventDefault()
        setTodos([...todos, inputValue])
        setInputValue('')
    }
    const xoa = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
    return (

        <div>
            {/* bai3 */}
            <div>
                <h1>Danh sach cong viec</h1>
                <form onSubmit={them}>
                    <input placeholder='Nhap cong viec...' style={{
                        padding: "10px",
                        width: "400px",
                    }}
                        value={inputValue} onChange={handleChange}
                    />
                    <button style={{
                        backgroundColor: "blue",
                        color: "white",
                        padding: "10px",
                        margin: "10px",
                        cursor: "pointer"
                    }}
                    >Them</button>
                </form>

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                    {todos.map((todo, index) => (
                        <span key={index}>
                            {index} {" "}
                            {todo}
                            <button style={{
                                backgroundColor: "red",
                                color: "white",
                                padding: "10px",
                                margin: "10px",
                                cursor: "pointer"
                            }} onClick={() => xoa(index)}>Delete</button>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
