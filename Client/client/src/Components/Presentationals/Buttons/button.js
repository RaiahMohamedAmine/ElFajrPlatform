import React from 'react';
import './button.css'

const Button =({
    onClick,
    children
})=>{
    return <button onClick={onClick} className='my-button'>
        {children}
    </button>
}

export default Button