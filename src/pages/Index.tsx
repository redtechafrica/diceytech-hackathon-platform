import React, { useState } from 'react';
import { Eye, EyeOff, Users, Trophy, Building, Star, Zap, Target, Code, UserPlus, LogIn } from 'lucide-react';

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState('light');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Authentication attempt:', { email, password, isLogin });
      setIsLoading(false);
    }, 1500);
  };

  const stats = [
    { label: 'Projects', value: '10+', icon: Trophy, color: 'bg-yellow-500' },
    { label: 'Talents', value: '400+', icon: Users, color: 'bg-pink-500' },
    { label: 'Organizations', value: '50+', icon: Building, color: 'bg-blue-500' },
  ];

  const features = [
    { icon: Star, title: 'Real Projects', desc: 'Work on industry challenges', color: 'text-yellow-500' },
    { icon: Trophy, title: 'Win Prizes', desc: 'Cash & recognition', color: 'text-pink-500' },
    { icon: Users, title: 'Network', desc: 'Connect with pros', color: 'text-blue-500' },
    { icon: Zap, title: 'Fast Track', desc: 'Accelerate career', color: 'text-purple-500' },
  ];

  const winnerImages = [
    'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fdicey%20tech%2FScreenshot%202025-06-30%20at%2003.50.09.png?alt=media&token=8c1ad2df-8ecb-4e73-a199-75ef6bc9c857',
    'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fdicey%20tech%2FScreenshot%202025-06-30%20at%2003.50.54.png?alt=media&token=d7337c0a-9cc1-438f-82a9-bb2845a919a0',
    'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fdicey%20tech%2FScreenshot%202025-06-30%20at%2003.49.01.png?alt=media&token=acb1a13a-7228-4cd8-b7bd-3d53b570ef90',
    'https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fdicey%20tech%2FScreenshot%202025-06-30%20at%2003.54.11.png?alt=media&token=ef5c7b4f-cef7-4101-91e8-c7476b11d667',
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden">
      <style jsx>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        
        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        
        .animate-scroll-up {
          animation: scroll-up 20s linear infinite;
        }
        
        .animate-scroll-down {
          animation: scroll-down 20s linear infinite;
        }
      `}</style>

      {/* Enhanced colorful background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-36 h-36 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-32 w-44 h-44 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-3000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-500/15 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 w-full px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {theme === 'dark' ? (
            <span className="text-2xl font-bold text-yellow-500">DiceyTech</span>
          ) : (
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fdicey%20tech%2Fsponsor_diceytech.png?alt=media&token=201427f2-3a3c-4dc1-a717-f101f8c7d7e2" 
              alt="DiceyTech" 
              className="h-10 w-auto object-contain"
            />
          )}
        </div>
        <button 
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
        >
          🌙
        </button>
      </header>

      <div className="relative z-10 flex min-h-[calc(100vh-80px)]">
        {/* Left Side - Hero Content */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-12">
          <div className="max-w-xl">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-pink-500 text-white mb-4 text-sm px-4 py-2 rounded-full font-medium">
                🚀 Africa's Premier Tech Platform
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Build Your Tech Career with
                <span className="text-blue-500 block mt-2">Real Projects</span>
              </h1>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Join hackathons, showcase your skills, and connect with top tech companies across Africa. 
              Your next career opportunity starts here.
            </p>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-3">
                    <div className={`p-3 rounded-2xl ${stat.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Enhanced Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className={`p-2 rounded-lg bg-white dark:bg-gray-800 shadow-md`}>
                    <feature.icon className={`h-5 w-5 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{feature.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Call to Action */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-yellow-500 border-3 border-white dark:border-gray-900 shadow-md"></div>
                <div className="w-10 h-10 rounded-full bg-pink-500 border-3 border-white dark:border-gray-900 shadow-md"></div>
                <div className="w-10 h-10 rounded-full bg-blue-500 border-3 border-white dark:border-gray-900 shadow-md"></div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Join 400+ developers</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Building African tech future</p>
              </div>
            </div>
          </div>
        </div>

        {/* Center - Dual Direction Scrolling Images */}
        <div className="w-80 flex gap-4 justify-center items-center relative py-8">
          {/* Left Column - Scrolling Up */}
          <div className="w-36 relative">
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white/90 to-transparent dark:from-gray-900 dark:via-gray-900/90 dark:to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/90 to-transparent dark:from-gray-900 dark:via-gray-900/90 dark:to-transparent z-10 pointer-events-none"></div>
            
            <div className="h-[600px] overflow-hidden">
              <div className="flex flex-col space-y-6 animate-scroll-up">
                {[...winnerImages, ...winnerImages, ...winnerImages].map((image, index) => (
                  <div key={`up-${index}`} className="flex-shrink-0">
                    <img 
                      src={image} 
                      alt={`DiceyTech Winner ${(index % winnerImages.length) + 1}`}
                      className="w-full h-40 rounded-xl object-cover border-3 border-gray-300 dark:border-gray-600 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Scrolling Down */}
          <div className="w-36 relative">
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white/90 to-transparent dark:from-gray-900 dark:via-gray-900/90 dark:to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/90 to-transparent dark:from-gray-900 dark:via-gray-900/90 dark:to-transparent z-10 pointer-events-none"></div>
            
            <div className="h-[600px] overflow-hidden">
              <div className="flex flex-col space-y-6 animate-scroll-down">
                {[...winnerImages.slice().reverse(), ...winnerImages.slice().reverse(), ...winnerImages.slice().reverse()].map((image, index) => (
                  <div key={`down-${index}`} className="flex-shrink-0">
                    <img 
                      src={image} 
                      alt={`DiceyTech Achievement ${(index % winnerImages.length) + 1}`}
                      className="w-full h-40 rounded-xl object-cover border-3 border-gray-300 dark:border-gray-600 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Spacious Login/Signup Form */}
        <div className="w-96 flex flex-col justify-center px-8 bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm border-l border-gray-200/50 dark:border-gray-700/50">
          <div className="w-full max-w-md mx-auto bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-blue-500/20 p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                {isLogin ? <LogIn className="h-8 w-8 text-white" /> : <UserPlus className="h-8 w-8 text-white" />}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {isLogin ? 'Welcome Back' : 'Join DiceyTech'}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {isLogin ? 'Sign in to your DiceyTech account' : 'Create your account and start building'}
              </p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {!isLogin && (
                <>
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:bg-gray-800 dark:text-white transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="username" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Username
                    </label>
                    <input
                      id="username"
                      type="text"
                      placeholder="Choose a username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:bg-gray-800 dark:text-white transition-all duration-200"
                    />
                  </div>
                </>
              )}

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {isLogin ? 'Email or username' : 'Email'}
                </label>
                <input
                  id="email"
                  type={isLogin ? "text" : "email"}
                  placeholder={isLogin ? "Enter your email or username" : "Enter your email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:bg-gray-800 dark:text-white transition-all duration-200"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:bg-gray-800 dark:text-white transition-all duration-200"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:bg-gray-800 dark:text-white transition-all duration-200"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    {isLogin ? "Signing in..." : "Creating account..."}
                  </div>
                ) : (
                  isLogin ? "Sign In" : "Create Account"
                )}
              </div>
            </div>

            {/* Toggle */}
            <div className="text-center mt-6">
              <p className="text-gray-600 dark:text-gray-300">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <button 
                  className="text-pink-500 hover:text-pink-600 font-semibold hover:underline transition-colors"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Sign up for free" : "Sign in"}
                </button>
              </p>
            </div>

            {/* Demo Login Info */}
            {isLogin && (
              <div className="mt-6 p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                  <p className="text-sm text-purple-600 font-semibold">Demo Login</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Email: <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded text-blue-500 font-mono text-sm font-semibold">admin</code>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Password: <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded text-blue-500 font-mono text-sm font-semibold">admin</code>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
