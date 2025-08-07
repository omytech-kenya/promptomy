"use client";

import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { StatsCard } from "@/components/stats-card";
import { PromptCard } from "@/components/prompt-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Library, 
  Zap, 
  Users, 
  TrendingUp, 
  Clock, 
  Star,
  Plus,
  ArrowRight
} from "lucide-react";

export default function Dashboard() {
  const recentPrompts = [
    {
      title: "SEO Blog Post Generator",
      description: "Generate SEO-optimized blog posts with proper structure and keywords",
      tags: ["SEO", "Content", "Marketing"],
      lastUsed: "2 hours ago",
      uses: 45,
      isFavorite: true,
      isPublic: true,
    },
    {
      title: "Code Review Assistant",
      description: "AI assistant for reviewing code quality and suggesting improvements",
      tags: ["Development", "Code Review"],
      lastUsed: "1 day ago",
      uses: 23,
      isFavorite: false,
      isPublic: false,
    },
    {
      title: "Social Media Caption Creator",
      description: "Create engaging captions for social media posts across platforms",
      tags: ["Social Media", "Marketing"],
      lastUsed: "3 days ago",
      uses: 67,
      isFavorite: true,
      isPublic: true,
    },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50/20 via-white to-purple-50/20 dark:from-gray-900 dark:to-gray-800">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
              <p className="text-muted-foreground">Here's what's happening with your prompts today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Total Prompts"
                value={156}
                description="Active prompts in library"
                icon={Library}
                trend={{ value: 12, label: "from last month" }}
              />
              <StatsCard
                title="Executions Today"
                value="2,847"
                description="API calls made today"
                icon={Zap}
                trend={{ value: 8, label: "from yesterday" }}
              />
              <StatsCard
                title="Shared Prompts"
                value={23}
                description="Public prompts shared"
                icon={Users}
                trend={{ value: 5, label: "from last week" }}
              />
              <StatsCard
                title="Success Rate"
                value="99.2%"
                description="Successful executions"
                icon={TrendingUp}
                trend={{ value: 0.3, label: "from last month" }}
              />
            </div>

            {/* Quick Actions & Recent Activity */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Quick Actions */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="ghost">
                    <Plus className="mr-2 h-4 w-4" />
                    Create New Prompt
                  </Button>
                  <Button className="w-full justify-start" variant="ghost">
                    <Library className="mr-2 h-4 w-4" />
                    Browse Templates
                  </Button>
                  <Button className="w-full justify-start" variant="ghost">
                    <Users className="mr-2 h-4 w-4" />
                    Import from Community
                  </Button>
                  <Button className="w-full justify-start" variant="ghost">
                    <Star className="mr-2 h-4 w-4" />
                    View Favorites
                  </Button>
                </CardContent>
              </Card>

              {/* Usage Overview */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Monthly Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>API Calls</span>
                        <span>45,231 / 50,000</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Storage Used</span>
                        <span>2.3 GB / 10 GB</span>
                      </div>
                      <Progress value={23} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Team Members</span>
                        <span>3 / 5</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Prompts */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Recent Prompts
                  </CardTitle>
                  <Button variant="ghost" className="text-sm">
                    View All
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recentPrompts.map((prompt, index) => (
                    <PromptCard key={index} {...prompt} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}