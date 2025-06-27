
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Calendar, 
  Users, 
  Award, 
  MapPin, 
  Clock,
  Heart,
  ExternalLink,
  Trophy,
  Star
} from "lucide-react";

const ExploreProjects = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProfile, setSelectedProfile] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedOrganization, setSelectedOrganization] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AgriConnect Summit Hackathon - Bridging the Generational Divide',
      organization: 'DataFestAfrica',
      description: 'Build solutions to connect traditional farming with modern agricultural technology. Focus on creating platforms that bridge the gap between experienced farmers and tech-savvy youth.',
      startDate: 'May 02, 2025',
      endDate: 'May 15, 2025',
      difficulty: 'Hard',
      prize: '$5000',
      participants: 150,
      maxParticipants: 200,
      tags: ['Agriculture', 'Technology', 'Innovation'],
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400',
      featured: true,
      status: 'Active'
    },
    {
      id: 2,
      title: 'DataFestAfrica Hackathon 2024: Improving Academic Outcomes',
      organization: 'DataFestAfrica',
      description: 'Develop data-driven solutions to improve secondary education outcomes across Africa. Use analytics and machine learning to identify key factors affecting student performance.',
      startDate: 'Oct 05, 2024',
      endDate: 'Oct 10, 2024',
      difficulty: 'Intermediate',
      prize: '$3000',
      participants: 89,
      maxParticipants: 100,
      tags: ['Education', 'Data Science', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400',
      featured: false,
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Hack The Feed: Insights From Social Media Data',
      organization: 'Playhouse Communication Ltd',
      description: 'Extract meaningful insights from social media data to understand consumer behavior and trends. Build tools for sentiment analysis and trend prediction.',
      startDate: 'Oct 08, 2023',
      endDate: 'Oct 15, 2023',
      difficulty: 'Hard',
      prize: '$2500',
      participants: 45,
      maxParticipants: 60,
      tags: ['Social Media', 'Data Analysis', 'Machine Learning'],
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400',
      featured: false,
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Predicting Student Responses',
      organization: 'Target Tuition',
      description: 'Create predictive models to understand and forecast student learning patterns and responses to different teaching methodologies.',
      startDate: 'Sep 03, 2023',
      endDate: 'Sep 15, 2023',
      difficulty: 'Intermediate',
      prize: '$1500',
      participants: 67,
      maxParticipants: 80,
      tags: ['Education', 'Prediction', 'AI'],
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400',
      featured: false,
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Data-Driven Insights for Cardinal Stone\'s New Product Launch',
      organization: 'Cardinal Stone',
      description: 'Analyze market data and consumer behavior to provide actionable insights for a new financial product launch in the African market.',
      startDate: 'Jun 28, 2023',
      endDate: 'Jul 05, 2023',
      difficulty: 'Hard',
      prize: '$4000',
      participants: 34,
      maxParticipants: 50,
      tags: ['Finance', 'Market Analysis', 'Product Launch'],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400',
      featured: false,
      status: 'Completed'
    },
    {
      id: 6,
      title: 'Creating a Master Property List for London',
      organization: 'Mappa',
      description: 'Build a comprehensive database and visualization tool for London properties, including market trends, pricing analysis, and neighborhood insights.',
      startDate: 'Jun 28, 2023',
      endDate: 'Jul 10, 2023',
      difficulty: 'Intermediate',
      prize: '$2000',
      participants: 28,
      maxParticipants: 40,
      tags: ['Real Estate', 'Data Engineering', 'Visualization'],
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400',
      featured: false,
      status: 'Completed'
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDifficulty = selectedDifficulty === 'all' || project.difficulty.toLowerCase() === selectedDifficulty;
    const matchesOrganization = selectedOrganization === 'all' || project.organization === selectedOrganization;
    
    return matchesSearch && matchesDifficulty && matchesOrganization;
  });

  const organizations = [...new Set(projects.map(p => p.organization))];

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Hackathons & Practice Projects</h1>
            <p className="text-gray-600 mt-1">Discover exciting challenges and build your portfolio</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Heart className="mr-2 h-4 w-4" />
              Saved
            </Button>
            <Button onClick={() => navigate('/add-project')} className="bg-dicey-purple hover:bg-dicey-purple/90">
              <Trophy className="mr-2 h-4 w-4" />
              Host Challenge
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedProfile} onValueChange={setSelectedProfile}>
                <SelectTrigger>
                  <SelectValue placeholder="All Profiles" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Profiles</SelectItem>
                  <SelectItem value="hackathon">Hackathons</SelectItem>
                  <SelectItem value="practice">Practice Projects</SelectItem>
                  <SelectItem value="competition">Competitions</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger>
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedOrganization} onValueChange={setSelectedOrganization}>
                <SelectTrigger>
                  <SelectValue placeholder="Organization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Organizations</SelectItem>
                  {organizations.map(org => (
                    <SelectItem key={org} value={org}>{org}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className={`cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 ${
                project.featured ? 'ring-2 ring-dicey-yellow ring-opacity-50' : ''
              }`}
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {project.featured && (
                  <Badge className="absolute top-3 left-3 bg-dicey-yellow text-black">
                    <Star className="mr-1 h-3 w-3" />
                    Featured
                  </Badge>
                )}
                <Badge 
                  className={`absolute top-3 right-3 ${
                    project.status === 'Active' 
                      ? 'bg-green-500' 
                      : 'bg-gray-500'
                  }`}
                >
                  {project.status}
                </Badge>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                </div>
                <CardDescription className="text-sm text-dicey-teal font-medium">
                  {project.organization}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{project.endDate}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>{project.participants}/{project.maxParticipants}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant={
                        project.difficulty === 'Hard' ? 'destructive' : 
                        project.difficulty === 'Intermediate' ? 'default' : 'secondary'
                      }>
                        {project.difficulty}
                      </Badge>
                      <div className="flex items-center gap-1 text-dicey-yellow font-semibold">
                        <Award className="h-4 w-4" />
                        <span>{project.prize}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredProjects.length > 0 && (
          <div className="text-center pt-6">
            <Button variant="outline" size="lg">
              Load More Projects
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search terms or filters to find more projects.
              </p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedProfile('all');
                setSelectedDifficulty('all');
                setSelectedOrganization('all');
              }}>
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ExploreProjects;
