'use client'
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../data/firebaseConfig';

const CreateAccount: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
        const auth = getAuth(app);
        event.preventDefault();


        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(userCredential)
            // Do something with the signed-up user
        } catch (error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
        }
    };

    return (
        <form className='h-[80vh] flex flex-col justify-center md:w-3/4 md:mx-auto lg:w-1/2' onSubmit={handleSignUp}>
            <div className='text-center mb-4 text-lg font-bold'>
                <h1 className='md:text-2xl'>Create Account</h1>
            </div>
            <div className='flex flex-col mx-5 rounded-xl justify-center bg-white py-5 lg:h-1/2'>
                <div className='flex flex-col w-[80%] mx-auto md:mb-5'>
                    <label htmlFor="username" className='py-2'>Username</label>
                    <input
                        type="email"
                        name="username"
                        id="username"
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
                    <span className={`text-red-500 ${error ? '' : 'hidden'}`}>Password should be at least 6 characters long.</span>
                </div>
                <div className='flex justify-evenly items-center mt-10'>
                    <button type='submit' className='bg-blue-500 w-1/4 text-center text-white rounded-md p-2 cursor-pointer'>
                        Sign Up
                    </button>
                </div>
            </div>
            {/* Checking to see if user logged in */}
            {error && <p>Error: {error}</p>}
        </form>
    );
};

export default CreateAccount;