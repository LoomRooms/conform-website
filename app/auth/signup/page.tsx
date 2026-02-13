'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signUp } from '@/lib/auth/auth-helpers';

export default function SignupPage() {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Validation
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        setIsLoading(true);

        const result = await signUp(email, password, fullName);

        setIsLoading(false);

        if (result.success) {
            setSuccess(true);
            setTimeout(() => {
                router.push('/auth/login');
            }, 2000);
        } else {
            setError(result.error?.message || 'Signup failed');
        }
    };

    if (success) {
        return (
            <div className=\"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4\">
                < div className =\"max-w-md w-full text-center\">
                    < div className =\"bg-green-50 border-2 border-green-500 rounded p-8\">
                        < h2 className =\"font-heading text-4xl text-green-800 mb-4\">✅ Account Created!</h2>
                            < p className =\"text-green-700 mb-4\">
              Please check your email to verify your account.
            </p >
            <p className=\"text-sm text-gray-600\">Redirecting to login...</p>
          </div >
        </div >
      </div >
    );
    }

    return (
        <div className=\"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8\">
            < div className =\"max-w-md w-full\">
                < div >
                <h2 className=\"font-heading text-5xl text-center mb-2\">Create Account</h2>
                    < p className =\"mt-2 text-center text-sm text-gray-600\">
            Already have an account ? { ' '}
        < Link href =\"/auth/login\" className=\"font-bold text-primary hover:text-primary/80\">
    Sign in
            </Link >
          </p >
        </div >

        <form className=\"mt-8 space-y-6\" onSubmit={handleSubmit}>
    {
        error && (
            <div className=\"bg-red-50 border-2 border-red-500 rounded p-4\">
                < p className =\"text-red-700 text-sm\">{error}</p>
            </div >
          )
    }

    <div className=\"space-y-4\">
        < div >
        <label htmlFor=\"fullName\" className=\"block font-bold mb-2\">
                Full Name
              </label >
        <input
            id=\"fullName\"
    name =\"fullName\"
    type =\"text\"
    required
    value = { fullName }
    onChange = {(e) => setFullName(e.target.value)
}
className =\"w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none\"
placeholder =\"John Doe\"
    />
            </div >

            <div>
              <label htmlFor=\"email\" className=\"block font-bold mb-2\">
                Email Address
              </label>
              <input
                id=\"email\"
name =\"email\"
type =\"email\"
autoComplete =\"email\"
required
value = { email }
onChange = {(e) => setEmail(e.target.value)}
className =\"w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none\"
placeholder =\"you@example.com\"
    />
            </div >

            <div>
              <label htmlFor=\"password\" className=\"block font-bold mb-2\">
                Password
              </label>
              <input
                id=\"password\"
name =\"password\"
type =\"password\"
autoComplete =\"new-password\"
required
value = { password }
onChange = {(e) => setPassword(e.target.value)}
className =\"w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none\"
placeholder =\"••••••••\"
    />
    <p className=\"text-xs text-gray-500 mt-1\">At least 6 characters</p>
            </div >

            <div>
              <label htmlFor=\"confirmPassword\" className=\"block font-bold mb-2\">
                Confirm Password
              </label>
              <input
                id=\"confirmPassword\"
name =\"confirmPassword\"
type =\"password\"
autoComplete =\"new-password\"
required
value = { confirmPassword }
onChange = {(e) => setConfirmPassword(e.target.value)}
className =\"w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none\"
placeholder =\"••••••••\"
    />
            </div >
          </div >

    <div>
        <button
            type=\"submit\"
        disabled={isLoading}
        className=\"w-full px-8 py-4 bg-primary text-white font-bold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed\"
            >
        {isLoading ? 'Creating account...' : 'Create Account'}
    </button>
          </div >

    <div className=\"text-center\">
        < Link href =\"/\" className=\"text-sm text-gray-600 hover:text-gray-900\">
              ← Back to home
            </Link >
          </div >
        </form >
      </div >
    </div >
  );
}
