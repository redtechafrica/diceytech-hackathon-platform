
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, EyeOff, Users, Trophy, Building, Star } from 'lucide-react';
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
    { label: 'Projects Completed', value: '10+', icon: Trophy },
    { label: 'Talents', value: '400+', icon: Users },
    { label: 'Organizations', value: '50+', icon: Building },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-background">
      {/* Header */}
      <header className="w-full px-6 py-4 flex justify-between items-center">
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

      <div className="flex min-h-[calc(100vh-80px)]">
        {/* Left Side - Hero Content */}
        <div className="flex-1 flex flex-col justify-center px-12 lg:px-20">
          <div className="max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Build Your Tech Career with
              <span className="text-dicey-azure"> Real Projects</span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Join hackathons, showcase your skills, and connect with top tech companies across Africa. 
              Your next career opportunity starts here.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="p-3 rounded-full bg-dicey-azure/10 text-dicey-azure">
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge className="bg-dicey-yellow text-dicey-dark-pink">
                  <Star className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
                <span className="text-gray-600 dark:text-gray-300">Real-world hackathons and competitions</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-dicey-magenta text-white">
                  <Trophy className="h-3 w-3 mr-1" />
                  Prizes
                </Badge>
                <span className="text-gray-600 dark:text-gray-300">Win cash prizes and recognition</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-dicey-azure text-white">
                  <Users className="h-3 w-3 mr-1" />
                  Network
                </Badge>
                <span className="text-gray-600 dark:text-gray-300">Connect with industry professionals</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-96 flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900">
          <Card className="w-full max-w-md mx-auto border-dicey-azure/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Welcome Back</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Sign in to your account to continue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                    className="border-gray-300 focus:border-dicey-azure focus:ring-dicey-azure"
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
                      className="border-gray-300 focus:border-dicey-azure focus:ring-dicey-azure pr-10"
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
                  className="w-full bg-dicey-azure hover:bg-dicey-azure/90 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Don't have an account?{" "}
                  <Button variant="link" className="p-0 h-auto text-dicey-magenta hover:text-dicey-magenta/80">
                    Sign up
                  </Button>
                </p>
              </div>

              {/* Demo Login Info */}
              <div className="mt-6 p-3 bg-dicey-yellow/10 rounded-lg border border-dicey-yellow/20">
                <p className="text-sm text-dicey-dark-pink font-medium mb-1">Demo Login:</p>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  Email: <code className="bg-white dark:bg-gray-800 px-1 rounded">admin</code><br />
                  Password: <code className="bg-white dark:bg-gray-800 px-1 rounded">admin</code>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
