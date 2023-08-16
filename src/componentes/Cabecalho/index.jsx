import logo from "./logo.png"
import search from "./search.png"
import React from "react";

export default function Cabecalho(){
    return (
        <header>
            <img src={logo} alt="Logo da Alura Space" />
            <div>
                <input 
                    type="text" 
                    placeholder="O que você Procura?"
                />
                <img src={search} alt="Ícone de lupa" />
            </div>
        </header>
    )
}