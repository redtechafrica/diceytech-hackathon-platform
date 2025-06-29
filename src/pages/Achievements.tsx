
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  Star, 
  Award, 
  Target, 
  Zap, 
  Crown, 
  Medal,
  Users,
  Calendar,
  Code,
  Heart,
  TrendingUp
} from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'Rising Star',
      description: 'Be in the top 10% of active users this month',
      icon: Star,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100',
      earned: true,
      earnedDate: '2024-11-15',
      points: 100,
      rarity: 'Rare'
    },
    {
      id: 2,
      title: 'First Project',
      description: 'Complete your first project on DiceyTech',
      icon: Trophy,
      color: 'text-dicey-teal',
      bgColor: 'bg-dicey-teal/10',
      earned: true,
      earnedDate: '2024-10-20',
      points: 50,
      rarity: 'Common'
    },
    {
      id: 3,
      title: 'Hackathon Hero',
      description: 'Participate in 5 hackathons',
      icon: Crown,
      color: 'text-dicey-purple',
      bgColor: 'bg-dicey-purple/10',
      earned: true,
      earnedDate: '2024-11-10',
      points: 200,
      rarity: 'Epic'
    },
    {
      id: 4,
      title: 'Code Warrior',
      description: 'Submit 10 projects to your portfolio',
      icon: Code,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
      earned: false,
      progress: 6,
      maxProgress: 10,
      points: 150,
      rarity: 'Rare'
    },
    {
      id: 5,
      title: 'Network Builder',
      description: 'Connect with 50 other developers',
      icon: Users,
      color: 'text-green-500',
      bgColor: 'bg-green-100',
      earned: false,
      progress: 23,
      maxProgress: 50,
      points: 100,
      rarity: 'Uncommon'
    },
    {
      id: 6,
      title: 'Streak Master',
      description: 'Maintain a 30-day activity streak',
      icon: Zap,
      color: 'text-orange-500',
      bgColor: 'bg-orange-100',
      earned: false,
      progress: 18,
      maxProgress: 30,
      points: 120,
      rarity: 'Rare'
    },
    {
      id: 7,
      title: 'Job Hunter',
      description: 'Apply to 25 job opportunities',
      icon: Target,
      color: 'text-red-500',
      bgColor: 'bg-red-100',
      earned: false,
      progress: 15,
      maxProgress: 25,
      points: 80,
      rarity: 'Common'
    },
    {
      id: 8,
      title: 'Community Favorite',
      description: 'Receive 100 likes on your projects',
      icon: Heart,
      color: 'text-pink-500',
      bgColor: 'bg-pink-100',
      earned: false,
      progress: 47,
      maxProgress: 100,
      points: 150,
      rarity: 'Rare'
    }
  ];

  const stats = {
    totalPoints: achievements.filter(a => a.earned).reduce((sum, a) => sum + a.points, 0),
    totalEarned: achievements.filter(a => a.earned).length,
    totalAchievements: achievements.length,
    rank: 'Gold',
    nextRank: 'Platinum',
    pointsToNextRank: 200
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common':
        return 'bg-gray-100 text-gray-800';
      case 'Uncommon':
        return 'bg-green-100 text-green-800';
      case 'Rare':
        return 'bg-blue-100 text-blue-800';
      case 'Epic':
        return 'bg-purple-100 text-purple-800';
      case 'Legendary':
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
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Trophy className="h-8 w-8 text-dicey-teal" />
              Achievements
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">Track your progress and unlock rewards</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <TrendingUp className="mr-2 h-4 w-4" />
              Leaderboard
            </Button>
            <Button className="bg-dicey-teal hover:bg-dicey-teal/90">
              <Star className="mr-2 h-4 w-4" />
              Share Progress
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-dicey-teal text-white">
            <CardContent className="p-6 text-center">
              <Trophy className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{stats.totalPoints}</div>
              <div className="text-sm opacity-90">Total Points</div>
            </CardContent>
          </Card>
          
          <Card className="bg-dicey-purple text-white">
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{stats.totalEarned}/{stats.totalAchievements}</div>
              <div className="text-sm opacity-90">Achievements</div>
            </CardContent>
          </Card>
          
          <Card className="bg-dicey-yellow text-black">
            <CardContent className="p-6 text-center">
              <Crown className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{stats.rank}</div>
              <div className="text-sm opacity-90">Current Rank</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Medal className="h-12 w-12 mx-auto mb-4 text-gray-500" />
              <div className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                {Math.round(((stats.totalPoints % 1000) / 1000) * 100)}%
              </div>
              <div className="text-sm text-gray-500">To {stats.nextRank}</div>
            </CardContent>
          </Card>
        </div>

        {/* Progress to Next Rank */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Progress to {stats.nextRank}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {stats.pointsToNextRank} more points needed
                </p>
              </div>
              <Badge className="bg-dicey-teal text-white">{stats.rank}</Badge>
            </div>
            <Progress value={((stats.totalPoints % 1000) / 1000) * 100} className="h-3" />
          </CardContent>
        </Card>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <Card 
              key={achievement.id} 
              className={`transition-all hover:shadow-lg ${
                achievement.earned 
                  ? 'border-dicey-teal/50 bg-dicey-teal/5' 
                  : 'border-gray-200 opacity-75'
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-full ${achievement.bgColor}`}>
                    <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge className={getRarityColor(achievement.rarity)}>
                      {achievement.rarity}
                    </Badge>
                    {achievement.earned && (
                      <Badge className="bg-green-100 text-green-800">
                        ✓ Earned
                      </Badge>
                    )}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {achievement.description}
                </p>
                
                {achievement.earned ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">
                        {new Date(achievement.earnedDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-dicey-yellow" />
                      <span className="text-sm font-medium">{achievement.points} pts</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Progress: {achievement.progress}/{achievement.maxProgress}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{achievement.points} pts</span>
                      </div>
                    </div>
                    <Progress 
                      value={(achievement.progress! / achievement.maxProgress!) * 100} 
                      className="h-2"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Achievement Activity</CardTitle>
            <CardDescription>Your latest accomplishments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievements.filter(a => a.earned).slice(0, 3).map((achievement) => (
                <div key={achievement.id} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className={`p-2 rounded-full ${achievement.bgColor}`}>
                    <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">{achievement.title}</h4>
                    <p className="text-sm text-gray-500">
                      Earned on {new Date(achievement.earnedDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-dicey-yellow" />
                    <span className="text-sm font-medium">+{achievement.points}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Achievements;
