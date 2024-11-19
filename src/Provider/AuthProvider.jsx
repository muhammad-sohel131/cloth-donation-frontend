import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        logIn,
        loading
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubcribe();
        }
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
