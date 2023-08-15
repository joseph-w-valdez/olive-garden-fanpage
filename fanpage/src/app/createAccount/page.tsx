'use client'
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../data/firebaseConfig';

const CreateAccount: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async () => {
        const auth = getAuth(app);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(userCredential)
            // Do something with the signed-up user
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
        }
    };

    return (
        <form>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignUp}>Sign Up</button>
            {error && <p>Error: {error}</p>}
            {!error && <p>Login: success</p>}
        </form>
    );
};

export default CreateAccount;
