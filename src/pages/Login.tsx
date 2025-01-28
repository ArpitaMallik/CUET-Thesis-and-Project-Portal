import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { useRouter } from '@tanstack/react-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/firebase';
// import { db } from '../components/firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function Login() {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  // const auth = getAuth(app);
  const router = useRouter();

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const email = `u${studentId}@student.cuet.ac.bd`;
    // Add login logic here, then navigate
    localStorage.setItem('studentId', studentId);
    console.log(studentId);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log({ studentId, password, rememberMe });
      router.navigate({ to: '/dashboard'});
      toast.success("Login successful! Redirecting...");
    } catch (error: any) {
      let errorMessage = "An error occurred. Please try again.";
      console.log(error.code)
      if (error.code === "auth/user-not-found") {
        errorMessage = "User not found. Please check your Student ID and password.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Incorrect password. Please try again.";
      } else if (error.code === "auth/invalid-credential") {
        errorMessage = "Invalid Credentials! Try again!";
      }
      console.log(errorMessage)
      toast.error(errorMessage);
      // alert(errorMessage);
    }  };

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
       <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center">
            <GraduationCap className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            CUET Thesis & Project Portal
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to access your academic resources
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">
                Student ID
              </label>
              <input
                id="studentId"
                name="studentId"
                type="text"
                required
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your student ID"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
