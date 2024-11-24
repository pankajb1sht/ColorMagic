import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Palette } from 'lucide-react';
import toast from 'react-hot-toast';
import { auth, googleProvider } from './firebaseConfig'; // Import your Firebase config
import { signInWithPopup } from 'firebase/auth';

export default function Signup() {
  const navigate = useNavigate();

  // Handle Google Sign-Up
  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      // Handle the user info after successful login
      toast.success('Signed up successfully with Google!');
      navigate('/');  // Navigate to home page or dashboard
    } catch (error) {
      toast.error('Error signing up with Google: ' + error.message);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <div className="flex justify-center">
            <Palette className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up with Google
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in
            </Link>
          </p>
        </div>

        <div className="flex items-center justify-center space-x-2 mt-4">
          <button
            type="button"
            onClick={handleGoogleSignup}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
          >
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
}
