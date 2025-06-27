
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Building, 
  MapPin, 
  Clock,
  Eye,
  FileText,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  XCircle
} from "lucide-react";

const MyApplications = () => {
  const [activeTab, setActiveTab] = useState('all');

  const applications = [
    {
      id: 1,
      jobTitle: 'Data Analyst - Growth',
      company: 'Kuda Technologies Ltd',
      appliedDate: '2025-01-10',
      status: 'Under Review',
      statusColor: 'bg-blue-500',
      type: 'Job',
      location: 'Lagos, Nigeria',
      salary: 'Not specified',
      lastUpdate: '2 days ago',
      notes: 'Application forwarded to hiring manager'
    },
    {
      id: 2,
      jobTitle: 'AgriConnect Summit Hackathon',
      company: 'DataFestAfrica',
      appliedDate: '2025-01-05',
      status: 'Accepted',
      statusColor: 'bg-green-500',
      type: 'Hackathon',
      location: 'Remote',
      prize: '$5000',
      lastUpdate: '1 week ago',
      notes: 'Congratulations! You have been selected to participate.'
    },
    {
      id: 3,
      jobTitle: 'Data Software Engineer',
      company: 'BlakBear',
      appliedDate: '2024-12-28',
      status: 'Rejected',
      statusColor: 'bg-red-500',
      type: 'Job',
      location: 'London, UK',
      salary: '£ 50000 - 70000',
      lastUpdate: '1 week ago',
      notes: 'Thank you for your interest. We have decided to move forward with other candidates.'
    },
    {
      id: 4,
      jobTitle: 'Data Intern',
      company: 'Pirical',
      appliedDate: '2024-12-20',
      status: 'Interview Scheduled',
      statusColor: 'bg-yellow-500',
      type: 'Internship',
      location: 'London, UK',
      salary: '£ 10000 - 11000',
      lastUpdate: '3 days ago',
      notes: 'Interview scheduled for January 25th at 2:00 PM GMT'
    },
    {
      id: 5,
      jobTitle: 'Hack The Feed Challenge',
      company: 'Playhouse Communication Ltd',
      appliedDate: '2024-12-15',
      status: 'Submitted',
      statusColor: 'bg-gray-500',
      type: 'Hackathon',
      location: 'Remote',
      prize: '$2500',
      lastUpdate: '2 weeks ago',
      notes: 'Project submitted successfully. Results pending.'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Accepted': return CheckCircle;
      case 'Rejected': return XCircle;
      case 'Interview Scheduled': return Calendar;
      case 'Under Review': return Eye;
      default: return AlertCircle;
    }
  };

  const filteredApplications = applications.filter(app => {
    if (activeTab === 'all') return true;
    if (activeTab === 'jobs') return app.type === 'Job' || app.type === 'Internship';
    if (activeTab === 'hackathons') return app.type === 'Hackathon';
    if (activeTab === 'pending') return ['Under Review', 'Interview Scheduled', 'Submitted'].includes(app.status);
    return true;
  });

  const stats = {
    total: applications.length,
    pending: applications.filter(app => ['Under Review', 'Interview Scheduled', 'Submitted'].includes(app.status)).length,
    accepted: applications.filter(app => app.status === 'Accepted').length,
    rejected: applications.filter(app => app.status === 'Rejected').length
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Applications</h1>
            <p className="text-gray-600 mt-1">Track your job applications and hackathon submissions</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Applications</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                </div>
                <div className="p-3 rounded-full bg-dicey-teal/10 text-dicey-teal">
                  <FileText className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.pending}</p>
                </div>
                <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                  <Clock className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Accepted</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.accepted}</p>
                </div>
                <div className="p-3 rounded-full bg-green-100 text-green-600">
                  <CheckCircle className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Success Rate</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {Math.round((stats.accepted / stats.total) * 100)}%
                  </p>
                </div>
                <div className="p-3 rounded-full bg-dicey-purple/10 text-dicey-purple">
                  <TrendingUp className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Applications List */}
        <Card>
          <CardHeader>
            <CardTitle>Applications</CardTitle>
            <CardDescription>View and manage your job applications and hackathon submissions</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All ({stats.total})</TabsTrigger>
                <TabsTrigger value="jobs">Jobs</TabsTrigger>
                <TabsTrigger value="hackathons">Hackathons</TabsTrigger>
                <TabsTrigger value="pending">Pending ({stats.pending})</TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab} className="mt-6">
                <div className="space-y-4">
                  {filteredApplications.map((application) => {
                    const StatusIcon = getStatusIcon(application.status);
                    return (
                      <Card key={application.id} className="transition-all hover:shadow-md">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-start gap-3">
                                <div className={`p-2 rounded-full ${application.statusColor}`}>
                                  <StatusIcon className="h-4 w-4 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-lg font-semibold text-gray-900">
                                    {application.jobTitle}
                                  </h3>
                                  <p className="text-dicey-teal font-medium">
                                    {application.company}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">{application.type}</Badge>
                              <Badge className={application.statusColor}>
                                {application.status}
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{application.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>Applied {new Date(application.appliedDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              <span>Updated {application.lastUpdate}</span>
                            </div>
                          </div>
                          
                          {application.salary && (
                            <div className="text-sm text-gray-600 mb-3">
                              <strong>Salary:</strong> {application.salary}
                            </div>
                          )}
                          
                          {application.prize && (
                            <div className="text-sm text-gray-600 mb-3">
                              <strong>Prize:</strong> {application.prize}
                            </div>
                          )}
                          
                          {application.notes && (
                            <div className="bg-gray-50 p-3 rounded-lg mb-4">
                              <p className="text-sm text-gray-700">
                                <strong>Notes:</strong> {application.notes}
                              </p>
                            </div>
                          )}
                          
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="mr-1 h-3 w-3" />
                              View Details
                            </Button>
                            {application.status === 'Interview Scheduled' && (
                              <Button size="sm" className="bg-dicey-teal hover:bg-dicey-teal/90">
                                <Calendar className="mr-1 h-3 w-3" />
                                Prepare Interview
                              </Button>
                            )}
                            {application.status === 'Under Review' && (
                              <Button variant="outline" size="sm">
                                <FileText className="mr-1 h-3 w-3" />
                                Update Application
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                  
                  {filteredApplications.length === 0 && (
                    <div className="text-center py-12">
                      <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-600 mb-2">
                        No applications found
                      </h3>
                      <p className="text-gray-500">
                        {activeTab === 'all' 
                          ? "You haven't submitted any applications yet." 
                          : `No ${activeTab} applications found.`
                        }
                      </p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MyApplications;
