import React, { useEffect, useState } from 'react'

export const AuthContext = React.createContext({})

export const AuthProvider = (props) => {
    const [cart, setCart] = useState({ qtd: 0 })

    useEffect(() => {
        if(localStorage.getItem('cart')){
            setCart({qtd: parseInt(localStorage.getItem('cart'))})
        }
    },[])

    return (
        <AuthContext.Provider value={{cart, setCart}}>
            {props.children}
        </AuthContext.Provider>
    )
}