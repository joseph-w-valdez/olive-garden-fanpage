'use client'
import { createContext, useContext, useState } from "react"
import { getAuth, signOut } from 'firebase/auth';
import app from "../data/firebaseConfig"

interface AuthContextType {
    userData: any;
    setUserData: React.Dispatch<React.SetStateAction<any>>;
    handleSignOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    userData: null,
    setUserData: () => { },
    handleSignOut: async () => { },
});

export const useAuthContext = () => useContext(AuthContext)

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [userData, setUserData] = useState(null)

    async function handleSignOut() {
        const auth = getAuth(app)

        try {
            await signOut(auth);
            setUserData(null)
            console.log('User logged out');

        } catch (error) {
            console.error('Error logging out:', error);
        }
    }

    return (
        <AuthContext.Provider value={{ userData, setUserData, handleSignOut }}>
            {children}
        </AuthContext.Provider>
    )
}