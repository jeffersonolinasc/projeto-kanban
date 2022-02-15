import React, { useEffect, useRef } from 'react'
import './Dropdown.css';

export default function Dropdown(props) {
    const dropdownRef = useRef();


    const handleClick = (event) => {

        //verifica se o usuario esta clicando fora do elemento e fecha
        console.log(dropdownRef.current?.contains, event.target);

        if (dropdownRef && !dropdownRef.current?.contains(event.target) && props.onClose) {
            props.onClose();
        }

    }

    useEffect(() => {

        //adciona o evento de click em toda página
        document.addEventListener("click", handleClick);

        return () => {
            //remove quando o elemento sai da tela
            document.removeEventListener("click", handleClick);
        }
    })

    return (
        <div ref={dropdownRef} className={`dropdown custom-scroll ${props.class ? props.class : ""}`}>
            {props.children}
        </div>
    )
}
