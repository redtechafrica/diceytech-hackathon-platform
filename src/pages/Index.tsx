
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, EyeOff, Users, Trophy, Building, Star, Zap, Target, Code } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(email, password);
      toast({
        title: "Welcome back!",
        description: "You have successfully logged in.",
      });
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const stats = [
    { label: 'Projects Completed', value: '10+', icon: Trophy, color: 'bg-dicey-yellow' },
    { label: 'Talents', value: '400+', icon: Users, color: 'bg-dicey-magenta' },
    { label: 'Organizations', value: '50+', icon: Building, color: 'bg-dicey-azure' },
  ];

  const features = [
    { icon: Star, title: 'Real-world Projects', desc: 'Work on actual industry challenges', color: 'text-dicey-yellow' },
    { icon: Trophy, title: 'Win Prizes', desc: 'Cash rewards and recognition', color: 'text-dicey-magenta' },
    { icon: Users, title: 'Network', desc: 'Connect with professionals', color: 'text-dicey-azure' },
    { icon: Zap, title: 'Fast Track', desc: 'Accelerate your career', color: 'text-dicey-dark-pink' },
    { icon: Target, title: 'Skills Focus', desc: 'Targeted skill development', color: 'text-dicey-yellow' },
    { icon: Code, title: 'Tech Stack', desc: 'Modern technologies', color: 'text-dicey-magenta' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Colorful background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-dicey-yellow/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-dicey-magenta/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-dicey-azure/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-dicey-dark-pink/10 rounded-full blur-xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 w-full px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {theme === 'dark' ? (
            <span className="text-2xl font-bold text-dicey-yellow">DiceyTech</span>
          ) : (
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fdicey%20tech%2Fsponsor_diceytech.png?alt=media&token=201427f2-3a3c-4dc1-a717-f101f8c7d7e2" 
              alt="DiceyTech" 
              className="h-12 w-auto object-contain"
            />
          )}
        </div>
        <ThemeToggle />
      </header>

      <div className="relative z-10 flex min-h-[calc(100vh-80px)]">
        {/* Left Side - Hero Content */}
        <div className="flex-1 flex flex-col justify-center px-12 lg:px-20">
          <div className="max-w-2xl">
            <div className="mb-6">
              <Badge className="bg-dicey-magenta text-white mb-4 text-sm px-4 py-2">
                🚀 Africa's Premier Tech Platform
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Build Your Tech Career with
                <span className="text-dicey-azure block mt-2">Real Projects</span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Join hackathons, showcase your skills, and connect with top tech companies across Africa. 
              Your next career opportunity starts here with DiceyTech.
            </p>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-3">
                    <div className={`p-4 rounded-2xl ${stat.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Enhanced Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300">
                  <div className={`p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm`}>
                    <feature.icon className={`h-5 w-5 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{feature.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-dicey-yellow border-2 border-white dark:border-gray-900"></div>
                <div className="w-10 h-10 rounded-full bg-dicey-magenta border-2 border-white dark:border-gray-900"></div>
                <div className="w-10 h-10 rounded-full bg-dicey-azure border-2 border-white dark:border-gray-900"></div>
                <div className="w-10 h-10 rounded-full bg-dicey-dark-pink border-2 border-white dark:border-gray-900"></div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Join 400+ talented developers</p>
                <p className="text-xs text-gray-600 dark:text-gray-300">Building the future of African tech</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-96 flex flex-col justify-center px-8 bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm border-l border-gray-200/50 dark:border-gray-700/50">
          <Card className="w-full max-w-md mx-auto border-dicey-azure/30 shadow-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-dicey-azure rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Welcome Back</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Sign in to your DiceyTech account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email or username
                  </label>
                  <Input
                    id="email"
                    type="text"
                    placeholder="Enter your email or username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-gray-300 focus:border-dicey-azure focus:ring-dicey-azure/20 h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="border-gray-300 focus:border-dicey-azure focus:ring-dicey-azure/20 pr-12 h-12"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </Button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-dicey-azure hover:bg-dicey-azure/90 text-white h-12 text-base font-semibold shadow-lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>

              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Don't have an account?{" "}
                  <Button variant="link" className="p-0 h-auto text-dicey-magenta hover:text-dicey-magenta/80 font-semibold">
                    Sign up for free
                  </Button>
                </p>
              </div>

              {/* Demo Login Info */}
              <div className="p-4 bg-dicey-yellow/10 rounded-xl border border-dicey-yellow/30">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-dicey-yellow rounded-full"></div>
                  <p className="text-sm text-dicey-dark-pink font-semibold">Demo Login</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    Email: <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded text-dicey-azure font-mono">admin</code>
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    Password: <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded text-dicey-azure font-mono">admin</code>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
