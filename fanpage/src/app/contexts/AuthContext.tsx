'use client'
import { useRouter } from 'next/navigation';
import { createContext, useContext, useState } from "react"
import { getAuth, signOut } from 'firebase/auth';
import app from "../data/firebaseConfig"
import { Oval } from 'react-loading-icons'


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
    const [loggedIn, setLoggedIn] = useState(false)
    const [loggedOut, setLoggedOut] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const router = useRouter()

    async function handleSignOut() {
        const auth = getAuth(app)

        try {
            await signOut(auth);
            setLoggedOut(true)
            setTimeout(() => {
                setLoggedOut(false)
                setRedirect(true)
            }, 2000);
            setTimeout(() => {
                setRedirect(false)
                setUserData(null)
                router.push('/login')
            }, 4000);
        } catch (error) {
            console.error('Error logging out:', error);
        }
    }

    return (
        <AuthContext.Provider value={{ userData, setUserData, handleSignOut }}>
            {loggedOut &&
                <>
                    <div className='fixed inset-0 bg-black opacity-50 flex flex-col justify-center items-center z-40'>
                        <Oval stroke='white' className='w-[5rem] h-[5rem] my-5' />
                        <p className='text-white font-bold ml-5'>Signing Out...</p>
                    </div>
                    {children}
                </>
            }

            {redirect &&
                <section className='flex flex-col justify-center items-center h-screen'>
                    <h1 className='text-xl mb-5 font-bold'>Logged out successfully.</h1>
                    <p>Redirecting...</p>
                    <div className='flex justify-center mt-5'>
                        <Oval stroke='grey' />
                    </div>
                </section>
            }

            {!loggedOut && !redirect && children}
        </AuthContext.Provider>
    )
}