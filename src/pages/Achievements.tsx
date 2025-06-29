
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
      color: 'text-dicey-yellow',
      bgColor: 'bg-dicey-yellow/10',
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
      color: 'text-dicey-azure',
      bgColor: 'bg-dicey-azure/10',
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
      color: 'text-dicey-magenta',
      bgColor: 'bg-dicey-magenta/10',
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
      color: 'text-dicey-azure',
      bgColor: 'bg-dicey-azure/10',
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
      color: 'text-dicey-magenta',
      bgColor: 'bg-dicey-magenta/10',
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
      color: 'text-dicey-yellow',
      bgColor: 'bg-dicey-yellow/10',
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
      color: 'text-dicey-azure',
      bgColor: 'bg-dicey-azure/10',
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
      color: 'text-dicey-magenta',
      bgColor: 'bg-dicey-magenta/10',
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
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
      case 'Uncommon':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Rare':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Epic':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'Legendary':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Trophy className="h-8 w-8 text-dicey-azure" />
              Achievements
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">Track your progress and unlock rewards</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-dicey-azure text-dicey-azure hover:bg-dicey-azure hover:text-white">
              <TrendingUp className="mr-2 h-4 w-4" />
              Leaderboard
            </Button>
            <Button className="bg-dicey-azure hover:bg-dicey-azure/90 text-white">
              <Star className="mr-2 h-4 w-4" />
              Share Progress
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-dicey-azure border-dicey-azure">
            <CardContent className="p-6 text-center">
              <Trophy className="h-12 w-12 mx-auto mb-4 text-white" />
              <div className="text-3xl font-bold mb-2 text-white">{stats.totalPoints}</div>
              <div className="text-sm text-white/90">Total Points</div>
            </CardContent>
          </Card>
          
          <Card className="bg-dicey-magenta border-dicey-magenta">
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-white" />
              <div className="text-3xl font-bold mb-2 text-white">{stats.totalEarned}/{stats.totalAchievements}</div>
              <div className="text-sm text-white/90">Achievements</div>
            </CardContent>
          </Card>
          
          <Card className="bg-dicey-yellow border-dicey-yellow">
            <CardContent className="p-6 text-center">
              <Crown className="h-12 w-12 mx-auto mb-4 text-dicey-dark-pink" />
              <div className="text-3xl font-bold mb-2 text-dicey-dark-pink">{stats.rank}</div>
              <div className="text-sm text-dicey-dark-pink/80">Current Rank</div>
            </CardContent>
          </Card>
          
          <Card className="border-dicey-azure">
            <CardContent className="p-6 text-center">
              <Medal className="h-12 w-12 mx-auto mb-4 text-dicey-azure" />
              <div className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                {Math.round(((stats.totalPoints % 1000) / 1000) * 100)}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">To {stats.nextRank}</div>
            </CardContent>
          </Card>
        </div>

        {/* Progress to Next Rank */}
        <Card className="border-dicey-azure">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Progress to {stats.nextRank}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {stats.pointsToNextRank} more points needed
                </p>
              </div>
              <Badge className="bg-dicey-azure text-white">{stats.rank}</Badge>
            </div>
            <Progress value={((stats.totalPoints % 1000) / 1000) * 100} className="h-3" />
          </CardContent>
        </Card>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <Card 
              key={achievement.id} 
              className={`transition-all hover:shadow-lg border-2 ${
                achievement.earned 
                  ? 'border-dicey-azure bg-dicey-azure/5 dark:bg-dicey-azure/10' 
                  : 'border-gray-200 dark:border-gray-700'
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
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
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
                      <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(achievement.earnedDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-dicey-yellow" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{achievement.points} pts</span>
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
                        <span className="text-sm text-gray-500 dark:text-gray-400">{achievement.points} pts</span>
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
        <Card className="border-dicey-azure">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Recent Achievement Activity</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300">Your latest accomplishments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievements.filter(a => a.earned).slice(0, 3).map((achievement) => (
                <div key={achievement.id} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className={`p-2 rounded-full ${achievement.bgColor}`}>
                    <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">{achievement.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Earned on {new Date(achievement.earnedDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-dicey-yellow" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">+{achievement.points}</span>
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
