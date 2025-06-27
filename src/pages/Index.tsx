
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const { login, register } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    country: ''
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(loginData.email, loginData.password);
      toast({
        title: "Welcome back!",
        description: "Successfully logged in to DiceyTech.",
      });
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid credentials. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await register(registerData);
      toast({
        title: "Welcome to DiceyTech!",
        description: "Your account has been created successfully.",
      });
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create account. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dicey-teal via-dicey-purple to-dicey-yellow relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="relative z-10 flex min-h-screen">
        {/* Left Side - Hero */}
        <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
          <div className="max-w-lg text-white animate-fade-in">
            <div className="flex items-center mb-8">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fdicey%20tech%2Fsponsor_diceytech.png?alt=media&token=201427f2-3a3c-4dc1-a717-f101f8c7d7e2" 
                alt="DiceyTech Logo" 
                className="h-12 w-12 mr-3"
              />
              <h1 className="text-3xl font-bold">DiceyTech</h1>
            </div>
            
            <div className="mb-8">
              <div className="text-6xl font-bold mb-4 leading-tight">
                Discover
                <br />
                Your
                <br />
                <span className="text-dicey-yellow">Future</span>
              </div>
              <p className="text-xl opacity-90">
                Connect with hackathons, practice projects, and career opportunities. 
                Build your portfolio and grow your network in the tech ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-dicey-yellow">500+</div>
                <div className="text-sm opacity-80">Active Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-dicey-yellow">1200+</div>
                <div className="text-sm opacity-80">Talents</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-dicey-yellow">200+</div>
                <div className="text-sm opacity-80">Organizations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Forms */}
        <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
          <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl border-0">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-dicey-teal to-dicey-purple bg-clip-text text-transparent">
                Welcome to DiceyTech
              </CardTitle>
              <CardDescription>
                Join the community of innovators and creators
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login" className="data-[state=active]:bg-dicey-teal data-[state=active]:text-white">
                    Sign In
                  </TabsTrigger>
                  <TabsTrigger value="register" className="data-[state=active]:bg-dicey-purple data-[state=active]:text-white">
                    Register
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Email or username"
                        value={loginData.email}
                        onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={loginData.password}
                        onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                        required
                        className="h-12 pr-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-dicey-teal hover:bg-dicey-teal/90"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing In..." : "Sign In"}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="register">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="flex gap-2 mb-4">
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="flex-1 h-12 border-blue-500 text-blue-600 hover:bg-blue-50"
                      >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        Google
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="flex-1 h-12 border-gray-700 text-gray-700 hover:bg-gray-50"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.04 0H.96C.43 0 0 .43 0 .96v22.08c0 .53.43.96.96.96h22.08c.53 0 .96-.43.96-.96V.96C24 .43 23.57 0 23.04 0zM7.2 20.4H3.6V9h3.6v11.4zM5.4 7.56c-1.15 0-2.07-.94-2.07-2.1 0-1.16.92-2.1 2.07-2.1 1.14 0 2.07.94 2.07 2.1 0 1.16-.93 2.1-2.07 2.1zM20.4 20.4h-3.6v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.21V9h3.45v1.56h.05c.48-.91 1.65-1.87 3.4-1.87 3.63 0 4.3 2.39 4.3 5.5v6.21z"/>
                        </svg>
                        Microsoft
                      </Button>
                    </div>
                    
                    <div className="text-center text-sm text-gray-500 mb-4">
                      Create an account using
                    </div>

                    <Input
                      placeholder="Full name"
                      value={registerData.fullName}
                      onChange={(e) => setRegisterData(prev => ({ ...prev, fullName: e.target.value }))}
                      required
                      className="h-12"
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      value={registerData.email}
                      onChange={(e) => setRegisterData(prev => ({ ...prev, email: e.target.value }))}
                      required
                      className="h-12"
                    />
                    <Input
                      placeholder="Public username"
                      value={registerData.username}
                      onChange={(e) => setRegisterData(prev => ({ ...prev, username: e.target.value }))}
                      required
                      className="h-12"
                    />
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={registerData.password}
                        onChange={(e) => setRegisterData(prev => ({ ...prev, password: e.target.value }))}
                        required
                        className="h-12 pr-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    <Select onValueChange={(value) => setRegisterData(prev => ({ ...prev, country: value }))}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Country/Region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nigeria">Nigeria</SelectItem>
                        <SelectItem value="ghana">Ghana</SelectItem>
                        <SelectItem value="kenya">Kenya</SelectItem>
                        <SelectItem value="south-africa">South Africa</SelectItem>
                        <SelectItem value="uganda">Uganda</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <p className="text-xs text-gray-600">
                      By creating an account, you agree to the{" "}
                      <a href="#" className="text-dicey-purple hover:underline">Terms and Conditions</a>{" "}
                      and acknowledge that DiceyTech processes your personal data in accordance with the{" "}
                      <a href="#" className="text-dicey-purple hover:underline">Privacy Policy</a>.
                    </p>
                    
                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-dicey-purple hover:bg-dicey-purple/90"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating Account..." : "Create an account"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
