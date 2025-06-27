
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  Edit, 
  ExternalLink, 
  Github, 
  Trophy, 
  Star, 
  Calendar,
  Award,
  Target,
  TrendingUp,
  Users,
  Code,
  Database,
  Brain,
  Palette
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const MyPortfolio = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const portfolioStats = {
    totalProjects: 8,
    completedHackathons: 5,
    totalAwards: 3,
    profileViews: 247
  };

  const skills = [
    { name: 'Python', level: 90, category: 'Programming' },
    { name: 'Data Analysis', level: 85, category: 'Analytics' },
    { name: 'Machine Learning', level: 80, category: 'AI/ML' },
    { name: 'SQL', level: 88, category: 'Database' },
    { name: 'React', level: 75, category: 'Frontend' },
    { name: 'Django', level: 70, category: 'Backend' },
    { name: 'Tableau', level: 82, category: 'Visualization' },
    { name: 'AWS', level: 68, category: 'Cloud' }
  ];

  const projects = [
    {
      id: 1,
      title: 'AgriConnect Mobile App',
      description: 'A mobile application connecting farmers with modern agricultural technologies and market insights.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300',
      tags: ['React Native', 'Node.js', 'MongoDB'],
      status: 'Completed',
      award: '1st Place - AgriConnect Hackathon',
      github: 'https://github.com/username/agriconnect',
      demo: 'https://agriconnect-demo.com',
      date: 'May 2025'
    },
    {
      id: 2,
      title: 'Student Performance Predictor',
      description: 'Machine learning model to predict student academic outcomes based on various factors.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300',
      tags: ['Python', 'Scikit-learn', 'Pandas'],
      status: 'Completed',
      award: '2nd Place - DataFest Africa',
      github: 'https://github.com/username/student-predictor',
      demo: 'https://student-pred-demo.com',
      date: 'Oct 2024'
    },
    {
      id: 3,
      title: 'Social Media Analytics Dashboard',
      description: 'Real-time dashboard for analyzing social media trends and sentiment analysis.',
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=300',
      tags: ['React', 'D3.js', 'Python', 'Twitter API'],
      status: 'In Progress',
      github: 'https://github.com/username/social-analytics',
      date: 'Jan 2025'
    }
  ];

  const achievements = [
    {
      title: '1st Place - AgriConnect Summit Hackathon',
      date: 'May 2025',
      organization: 'DataFestAfrica',
      prize: '$5000',
      icon: Trophy,
      color: 'text-yellow-600'
    },
    {
      title: '2nd Place - DataFest Africa 2024',
      date: 'Oct 2024',
      organization: 'DataFestAfrica',
      prize: '$2000',
      icon: Award,
      color: 'text-silver-600'
    },
    {
      title: 'Best Innovation Award',
      date: 'Sep 2023',
      organization: 'Target Tuition',
      prize: '$1000',
      icon: Star,
      color: 'text-bronze-600'
    }
  ];

  const getSkillIcon = (category: string) => {
    switch (category) {
      case 'Programming': return Code;
      case 'Database': return Database;
      case 'AI/ML': return Brain;
      case 'Visualization': return Palette;
      default: return Target;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Portfolio</h1>
            <p className="text-gray-600 mt-1">Showcase your projects and achievements</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => navigate('/profile')}>
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
            <Button onClick={() => navigate('/add-project')} className="bg-dicey-purple hover:bg-dicey-purple/90">
              <Plus className="mr-2 h-4 w-4" />
              Add Project
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Projects</p>
                  <p className="text-2xl font-bold text-gray-900">{portfolioStats.totalProjects}</p>
                </div>
                <div className="p-3 rounded-full bg-dicey-teal/10 text-dicey-teal">
                  <Code className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Hackathons</p>
                  <p className="text-2xl font-bold text-gray-900">{portfolioStats.completedHackathons}</p>
                </div>
                <div className="p-3 rounded-full bg-dicey-purple/10 text-dicey-purple">
                  <Trophy className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Awards</p>
                  <p className="text-2xl font-bold text-gray-900">{portfolioStats.totalAwards}</p>
                </div>
                <div className="p-3 rounded-full bg-dicey-yellow/10 text-dicey-yellow">
                  <Award className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Profile Views</p>
                  <p className="text-2xl font-bold text-gray-900">{portfolioStats.profileViews}</p>
                </div>
                <div className="p-3 rounded-full bg-green-100 text-green-600">
                  <TrendingUp className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Profile Completion */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Profile Completion</CardTitle>
                  <CardDescription>Complete your profile to increase visibility</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Overall Progress</span>
                    <span className="text-sm text-gray-500">{user?.profileCompleteness}%</span>
                  </div>
                  <Progress value={user?.profileCompleteness} className="h-2" />
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Basic Information</span>
                      <Badge variant="default">Complete</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Skills & Technologies</span>
                      <Badge variant="default">Complete</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Work Experience</span>
                      <Badge variant="secondary">Incomplete</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Education</span>
                      <Badge variant="secondary">Incomplete</Badge>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4" onClick={() => navigate('/profile')}>
                    Complete Profile
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-dicey-teal rounded-full mt-2"></div>
                    <div className="text-sm">
                      <p className="font-medium">Won AgriConnect Hackathon</p>
                      <p className="text-gray-500">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-dicey-purple rounded-full mt-2"></div>
                    <div className="text-sm">
                      <p className="font-medium">Updated project portfolio</p>
                      <p className="text-gray-500">1 week ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-dicey-yellow rounded-full mt-2"></div>
                    <div className="text-sm">
                      <p className="font-medium">Applied to 3 new positions</p>
                      <p className="text-gray-500">2 weeks ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="transition-all hover:shadow-lg">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge 
                      className={`absolute top-3 right-3 ${
                        project.status === 'Completed' ? 'bg-green-500' : 'bg-blue-500'
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {project.award && (
                        <div className="flex items-center gap-1 text-dicey-yellow text-sm font-medium">
                          <Trophy className="h-4 w-4" />
                          {project.award}
                        </div>
                      )}
                      
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{project.date}</span>
                      </div>
                      
                      <div className="flex gap-2">
                        {project.github && (
                          <Button size="sm" variant="outline" className="flex-1">
                            <Github className="mr-1 h-3 w-3" />
                            Code
                          </Button>
                        )}
                        {project.demo && (
                          <Button size="sm" variant="outline" className="flex-1">
                            <ExternalLink className="mr-1 h-3 w-3" />
                            Demo
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Card className="border-2 border-dashed border-gray-300 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <Plus className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">Add New Project</h3>
                  <p className="text-gray-500 mb-4">Showcase your latest work</p>
                  <Button onClick={() => navigate('/add-project')}>
                    Add Project
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => {
                const IconComponent = getSkillIcon(skill.category);
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-gray-100">
                            <IconComponent className="h-5 w-5 text-gray-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{skill.name}</h4>
                            <p className="text-sm text-gray-500">{skill.category}</p>
                          </div>
                        </div>
                        <span className="text-sm font-medium">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6 mt-6">
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full bg-gray-100 ${achievement.color}`}>
                        <achievement.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {achievement.title}
                        </h3>
                        <p className="text-dicey-teal font-medium mb-1">
                          {achievement.organization}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {achievement.date}
                          </span>
                          <span className="flex items-center gap-1 text-dicey-yellow font-semibold">
                            <Award className="h-4 w-4" />
                            {achievement.prize}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default MyPortfolio;
