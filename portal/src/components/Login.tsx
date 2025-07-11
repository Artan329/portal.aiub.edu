import React, { useState } from 'react';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username) {
      setError('The User Name field is required.');
      return;
    }
    setError('');
    onLogin(username, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5]">
      <div className="bg-white p-6 rounded shadow-md w-[400px]">
        <div className="flex flex-col items-center mb-6">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/American_International_University-Bangladesh_Monogram.svg/1200px-American_International_University-Bangladesh_Monogram.svg.png" 
            alt="AIUB Logo" 
            className="w-20 h-20 mb-4"
          />
          <h2 className="text-lg font-semibold text-center text-[#333333]">
            AMERICAN INTERNATIONAL<br />
            UNIVERSITY-BANGLADESH
          </h2>
          <p className="text-sm text-[#666666] mt-1">— where leaders are created</p>
        </div>

        <p className="text-sm text-[#666666] mb-4 text-center">
          Sign in with your organizational id number
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-[#CCCCCC] rounded focus:outline-none focus:border-[#66AFE9]"
              placeholder="User Name"
            />
            {error && (
              <p className="text-[#FF0000] text-xs mt-1">{error}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-[#CCCCCC] rounded focus:outline-none focus:border-[#66AFE9]"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#428BCA] text-white py-2 rounded hover:bg-[#357EBD] transition-colors text-sm font-semibold"
          >
            Log In
          </button>

          <div className="text-center">
            <a href="#" className="text-[#428BCA] text-sm hover:underline">
              Can't access your account?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;