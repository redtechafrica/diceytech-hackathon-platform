
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
  Calendar, 
  Users, 
  Trophy, 
  Clock,
  MapPin,
  Filter,
  Star,
  ArrowRight
} from "lucide-react";

const Hackathons = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const hackathons = [
    {
      id: 1,
      title: 'AgriConnect Summit Hackathon 2024',
      organizer: 'DataFestAfrica',
      description: 'Build innovative solutions for African agriculture using AI and data analytics.',
      category: 'Agriculture',
      status: 'Registration Open',
      startDate: '2024-12-15',
      endDate: '2024-12-17',
      prize: '$10,000',
      participants: 156,
      maxParticipants: 500,
      location: 'Lagos, Nigeria',
      difficulty: 'Intermediate',
      tags: ['AI', 'Agriculture', 'Data Analytics'],
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400',
      isNew: true
    },
    {
      id: 2,
      title: 'FinTech Innovation Challenge',
      organizer: 'African Banking Corp',
      description: 'Create financial solutions for the unbanked population in West Africa.',
      category: 'FinTech',
      status: 'Active',
      startDate: '2024-11-20',
      endDate: '2024-12-20',
      prize: '$25,000',
      participants: 234,
      maxParticipants: 300,
      location: 'Accra, Ghana',
      difficulty: 'Advanced',
      tags: ['Blockchain', 'Mobile Payments', 'Financial Inclusion'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400',
      isNew: false
    },
    {
      id: 3,
      title: 'HealthTech Solutions Hackathon',
      organizer: 'MedTech Africa',
      description: 'Develop digital health solutions for rural healthcare delivery.',
      category: 'Healthcare',
      status: 'Upcoming',
      startDate: '2025-01-15',
      endDate: '2025-01-17',
      prize: '$15,000',
      participants: 0,
      maxParticipants: 400,
      location: 'Virtual',
      difficulty: 'Beginner',
      tags: ['Telemedicine', 'IoT', 'Mobile Health'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400',
      isNew: true
    },
    {
      id: 4,
      title: 'Smart City IoT Challenge',
      organizer: 'Urban Development Initiative',
      description: 'Build IoT solutions for smart city infrastructure in Africa.',
      category: 'IoT',
      status: 'Registration Open',
      startDate: '2024-12-01',
      endDate: '2024-12-03',
      prize: '$20,000',
      participants: 89,
      maxParticipants: 200,
      location: 'Nairobi, Kenya',
      difficulty: 'Advanced',
      tags: ['IoT', 'Smart Cities', 'Infrastructure'],
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400',
      isNew: false
    }
  ];

  const filteredHackathons = hackathons.filter(hackathon => {
    const matchesSearch = hackathon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hackathon.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hackathon.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || hackathon.category.toLowerCase() === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || hackathon.status.toLowerCase().includes(selectedStatus);
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Registration Open':
        return 'bg-green-100 text-green-800';
      case 'Active':
        return 'bg-blue-100 text-blue-800';
      case 'Upcoming':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Hackathons</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">Discover and join exciting hackathons across Africa</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Star className="mr-2 h-4 w-4" />
              Saved Events
            </Button>
            <Button className="bg-dicey-teal hover:bg-dicey-teal/90">
              <Trophy className="mr-2 h-4 w-4" />
              Host Hackathon
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
                  placeholder="Search hackathons..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="agriculture">Agriculture</SelectItem>
                  <SelectItem value="fintech">FinTech</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="iot">IoT</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="registration">Registration Open</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="w-full">
                <Filter className="mr-2 h-4 w-4" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Featured Hackathon */}
        <Card className="bg-dicey-teal text-white">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-4">
              <Badge className="bg-white/20 text-white">Featured</Badge>
              <Badge className="bg-dicey-yellow text-black">Registration Open</Badge>
            </div>
            <h2 className="text-2xl font-bold mb-2">AgriConnect Summit Hackathon 2024</h2>
            <p className="text-white/90 mb-4">
              Join Africa's largest agricultural technology hackathon. Build innovative solutions using AI and data analytics to transform farming across the continent.
            </p>
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Dec 15-17, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                <span>$10,000 Prize</span>
              </div>
            </div>
            <Button className="bg-white text-dicey-teal hover:bg-gray-100">
              Join Hackathon
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Hackathon Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredHackathons.map((hackathon) => (
            <Card key={hackathon.id} className="cursor-pointer transition-all hover:shadow-lg">
              <div className="relative">
                <img 
                  src={hackathon.image} 
                  alt={hackathon.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {hackathon.isNew && (
                  <Badge className="absolute top-3 left-3 bg-dicey-yellow text-black">New</Badge>
                )}
                <Badge className={`absolute top-3 right-3 ${getStatusColor(hackathon.status)}`}>
                  {hackathon.status}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {hackathon.title}
                    </h3>
                    <p className="text-dicey-teal font-medium">{hackathon.organizer}</p>
                  </div>
                  <Badge variant="outline">{hackathon.difficulty}</Badge>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {hackathon.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {hackathon.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{hackathon.startDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{hackathon.participants}/{hackathon.maxParticipants}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Trophy className="h-4 w-4" />
                    <span>{hackathon.prize}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-dicey-teal hover:bg-dicey-teal/90"
                    onClick={() => navigate(`/project/${hackathon.id}`)}
                  >
                    View Details
                  </Button>
                  <Button variant="outline" size="icon">
                    <Star className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredHackathons.length > 0 && (
          <div className="text-center pt-6">
            <Button variant="outline" size="lg">
              Load More Hackathons
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredHackathons.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Trophy className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No hackathons found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Try adjusting your search terms or filters to find more hackathons.
              </p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedStatus('all');
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

export default Hackathons;
