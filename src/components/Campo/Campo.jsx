import React from "react";
import "./Campo.css"

export default function Campo({ className, placeholder, value, onChange, type }) {
    return (
        <div className="Campo">
            <input 
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} // Aqui o evento onChange chama a função passada via prop
            />
        </div>
    );
}
