import { createContext, useState, useContext } from "react";

const Wheater = createContext();

export const WheaterProvider = ({children}) =>{

    const [city, setCity] = useState("izmir")

    const values = {
        city,
        setCity
    }

    return <Wheater.Provider value={values} >{children}</Wheater.Provider>
}

export const useWheater = () => {
    const context = useContext(Wheater)
    if(context === undefined) {
        throw new Error("Use  wheater should be used with in Wheater Provider")
    }

    return context

}