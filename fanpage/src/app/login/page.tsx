'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getAuth, signInWithEmailAndPassword, UserCredential, onAuthStateChanged } from 'firebase/auth';
import app from '../data/firebaseConfig';
import { useAuthContext } from '../contexts/AuthContext';
import { Oval } from 'react-loading-icons'


const SignInForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userError, setUserError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    const { userData, setUserData } = useAuthContext()
    const router = useRouter()

    const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const auth = getAuth(app);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            setLoading(true)
            setTimeout(() => {
                setLoggedIn(true)
                setLoading(false)
                setUserData(user);
            }, 2000);
            setTimeout(() => {
                router.back()
            }, 4000);

        } catch (error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/user-not-found') {
                setUserError(errorCode)
            } else if (errorCode === 'auth/wrong-password') {
                setPasswordError(errorCode)
            } else if (errorCode) {
                console.log(errorCode)
                setError(true)
            }
        }
    };



    return (
        <form className='h-[80vh] flex flex-col justify-center md:w-3/4 md:mx-auto lg:max-w-[40%] relative' onSubmit={handleSignIn}>
            {loading &&
                <div className='fixed inset-0 bg-black opacity-50 flex justify-center items-center'>
                    <Oval stroke='white' className='w-[5rem] h-[5rem]' />
                </div>
            }

            {loggedIn &&
                <section className='text-center'>
                    <h1 className='text-xl mb-5 font-bold'>Logged in successfully.</h1>
                    <p>Redirecting...</p>
                    <div className='flex justify-center mt-5'>
                        <Oval stroke='grey' />
                    </div>
                </section>}

            {!loggedIn && <>
                <h1 className='text-center font-bold text-2xl my-4'>Sign In</h1>
                <div className='flex flex-col mx-5 rounded-xl justify-center bg-white py-5'>
                    <div className='flex flex-col w-[80%] mx-auto md:mb-5'>
                        <label htmlFor="email" className='py-2'>Username</label>
                        <input
                            type="email"
                            name="username"
                            id="email"
                            placeholder='Username'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={`rounded-md pl-2 py-2 border ${userError ? 'border-red-500' : 'border-slate-200 '}`}
                        />
                        <span className={`text-red-500 ${userError ? '' : 'hidden'}`}>Incorrect Username</span>
                    </div>
                    <div className='flex flex-col w-[80%] mx-auto'>
                        <label htmlFor="password" className='py-2'>Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className={`rounded-md pl-2 py-2 border ${userData ? 'border-red-500' : 'border-slate-200 '}`}
                        />
                        <span className={`text-red-500 ${passwordError ? '' : 'hidden'}`}>Incorrect Password</span>
                    </div>
                    <div className='flex justify-evenly items-center mt-10'>
                        <button type='submit' className='bg-blue-500 w-1/4 text-center text-white rounded-md p-2 cursor-pointer'>
                            Sign In
                        </button>
                        <span className='text-blue-500'>Forgot Password?</span>
                    </div>
                    <div className='text-center mt-4'>
                        <Link href='/createAccount' className='cursor-pointer text-blue-500'>Create an Account</Link>
                    </div>
                </div>
                <div className='text-center'>
                    {error && <p className='text-red-500'>Error: Please try again later.</p>}
                </div>
            </>}
        </form>
    );
};

export default SignInForm;
