
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
  MapPin, 
  Calendar, 
  DollarSign, 
  Building, 
  Clock,
  Heart,
  Filter,
  Briefcase,
  Users
} from "lucide-react";

const JobOpportunities = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedSalary, setSelectedSalary] = useState('all');

  const jobs = [
    {
      id: 1,
      title: 'Data Analyst - Compliance Systems',
      company: 'Kraken',
      logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100',
      type: 'Full-time',
      location: 'Remote',
      salary: 'Not specified',
      postedDate: 'Added August 21, 2023',
      description: 'We are looking for a skilled Data Analyst to join our compliance team. You will be responsible for analyzing complex datasets and ensuring regulatory compliance.',
      requirements: ['Python', 'SQL', 'Data Analysis', 'Compliance'],
      isRemote: true,
      isNew: false
    },
    {
      id: 2,
      title: 'Data Analyst - Growth',
      company: 'Kuda Technologies Ltd',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100',
      type: 'Full-time',
      location: 'On Premise',
      region: 'Nigeria',
      salary: 'Not specified',
      postedDate: 'Added August 21, 2023',
      description: 'Join our growth team to analyze user behavior, identify growth opportunities, and drive data-driven decision making for our fintech platform.',
      requirements: ['SQL', 'Python', 'Analytics', 'Growth Hacking'],
      isRemote: false,
      isNew: false
    },
    {
      id: 3,
      title: 'Data Analyst',
      company: 'Eat \'N\' Go Limited',
      logo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100',
      type: 'Full-time',
      location: 'On Premise',
      region: 'Africa',
      country: 'Nigeria',
      salary: 'Not specified',
      postedDate: 'Added August 21, 2023',
      description: 'Analyze restaurant operations data, customer preferences, and supply chain metrics to optimize our food service operations across Africa.',
      requirements: ['Excel', 'SQL', 'Tableau', 'Operations Analytics'],
      isRemote: false,
      isNew: false
    },
    {
      id: 4,
      title: 'Data Intern',
      company: 'Pirical',
      logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      type: 'Internship',
      location: 'On Premise',
      region: 'Europe',
      country: 'United Kingdom',
      salary: '£ 10000 - 11000',
      postedDate: 'Added August 7, 2023',
      description: 'Join our data team as an intern to gain hands-on experience in data analysis, machine learning, and business intelligence.',
      requirements: ['Python', 'Machine Learning', 'Statistics', 'Communication'],
      isRemote: false,
      isNew: true
    },
    {
      id: 5,
      title: 'Data Software Engineer',
      company: 'BlakBear',
      logo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      type: 'Full-time',
      location: 'Hybrid',
      region: 'Europe',
      country: 'United Kingdom',
      salary: '£ 50000 - 70000',
      postedDate: 'Added August 7, 2023',
      description: 'Build and maintain data infrastructure, develop ETL pipelines, and create scalable data solutions for our growing platform.',
      requirements: ['Python', 'Apache Spark', 'AWS', 'Docker', 'Kubernetes'],
      isRemote: false,
      isNew: false
    },
    {
      id: 6,
      title: 'Data Analyst at IQVIA',
      company: 'IQVIA',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100',
      type: 'Full-time',
      location: 'On Premise',
      region: 'Africa',
      country: 'Nigeria',
      salary: 'Not specified',
      postedDate: 'Added August 7, 2023',
      description: 'Analyze healthcare data to drive insights that improve patient outcomes and optimize healthcare delivery across Africa.',
      requirements: ['R', 'SAS', 'Healthcare Analytics', 'Statistics'],
      isRemote: false,
      isNew: false
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.requirements.some(req => req.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = selectedType === 'all' || job.type.toLowerCase().includes(selectedType);
    const matchesLocation = selectedLocation === 'all' || job.location.toLowerCase() === selectedLocation;
    
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Job Opportunities</h1>
            <p className="text-gray-600 mt-1">Find your next career opportunity in tech</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Heart className="mr-2 h-4 w-4" />
              Saved Jobs
            </Button>
            <Button className="bg-dicey-teal hover:bg-dicey-teal/90">
              <Briefcase className="mr-2 h-4 w-4" />
              Job Alerts
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
                  placeholder="Search jobs, companies, skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Contract Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="on premise">On Premise</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedSalary} onValueChange={setSelectedSalary}>
                <SelectTrigger>
                  <SelectValue placeholder="Salary Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Salary</SelectItem>
                  <SelectItem value="0-30k">$0 - $30k</SelectItem>
                  <SelectItem value="30k-60k">$30k - $60k</SelectItem>
                  <SelectItem value="60k+">$60k+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Job Listings */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <Card 
              key={job.id} 
              className="cursor-pointer transition-all hover:shadow-md hover:border-dicey-teal/30"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <img 
                    src={job.logo} 
                    alt={job.company}
                    className="w-16 h-16 rounded-lg object-cover bg-gray-100"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 hover:text-dicey-teal transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-dicey-teal font-medium">{job.company}</p>
                      </div>
                      <div className="flex gap-2">
                        {job.isNew && (
                          <Badge className="bg-dicey-yellow text-black">New</Badge>
                        )}
                        <Button variant="ghost" size="icon">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                        {job.region && <span>• {job.region}</span>}
                        {job.country && <span>• {job.country}</span>}
                      </div>
                      {job.salary !== 'Not specified' && (
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          <span>{job.salary}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{job.postedDate}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {job.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.requirements.map((req, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-dicey-teal hover:bg-dicey-teal/90">
                          Apply Now
                        </Button>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                      <span className="text-xs text-gray-500">
                        {Math.floor(Math.random() * 100) + 20} applicants
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredJobs.length > 0 && (
          <div className="text-center pt-6">
            <Button variant="outline" size="lg">
              Load More Jobs
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search terms or filters to find more opportunities.
              </p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedType('all');
                setSelectedLocation('all');
                setSelectedSalary('all');
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

export default JobOpportunities;
