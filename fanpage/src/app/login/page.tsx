'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getAuth, signInWithEmailAndPassword, UserCredential, } from 'firebase/auth';
import app from '../data/firebaseConfig';
import { useAuthContext } from '../contexts/AuthContext';


const SignInForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { userData, setUserData } = useAuthContext()
    const router = useRouter()

    const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const auth = getAuth(app);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            setUserData(user);
            setEmail('');
            setPassword('');
            setError('');
            router.push('/')

        } catch (error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
        }
    };



    return (
        <form className='h-[80vh] flex flex-col justify-center' onSubmit={handleSignIn}>
            <div className='flex flex-col mx-5 rounded-xl justify-center bg-white py-5'>
                <div className='flex flex-col w-[80%] mx-auto'>
                    <label htmlFor="email" className='py-2'>Username</label>
                    <input
                        type="email"
                        name="username"
                        id="email"
                        placeholder='Username'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='rounded-md pl-2 py-2 border border-slate-200'
                    />
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
                        className={`rounded-md pl-2 py-2 border ${error ? 'border-red-500' : 'border-slate-200 '}`}
                    />
                    <span className={`text-red-500 ${error ? '' : 'hidden'}`}>Incorrect Password</span>
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
            {/* Checking to see if user logged in */}
            {error && <p>Error: {error}</p>}
            {userData && <p>Logged in: success</p>}
        </form>

    );
};

export default SignInForm;
