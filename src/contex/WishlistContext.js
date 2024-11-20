import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { updateDoc, setDoc } from 'firebase/firestore'
export const WishlistContext = createContext();


function WishlistProvider(props) {

    const [count, setCount] = useState(1);
    let selected = []



    const wishlist = async par => {
        if (!selected.some(item => item === par)) {
            selected.push(par);
        }
        try {
 
            await AsyncStorage.setItem('wishlist', JSON.stringify(selected))
        } catch (error) {

        }

    }



    return (
        <WishlistContext.Provider value={{ count, setCount, wishlist }}>
            {props.children}
        </WishlistContext.Provider>
    )
}

export default WishlistProvider;