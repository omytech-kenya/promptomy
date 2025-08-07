"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { PromptCard } from "@/components/prompt-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List,
  SortAsc,
  Star,
  Globe,
  Lock
} from "lucide-react";

export default function Library() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = ["Development", "Marketing", "SEO", "Content", "Social Media", "Code Review", "AI", "Design", "Analytics"];
  
  const prompts = [
    {
      title: "SEO Blog Post Generator",
      description: "Generate SEO-optimized blog posts with proper structure and keywords for better search rankings",
      tags: ["SEO", "Content", "Marketing"],
      lastUsed: "2 hours ago",
      uses: 45,
      isFavorite: true,
      isPublic: true,
    },
    {
      title: "React Component Generator",
      description: "Create reusable React components with TypeScript and proper prop types",
      tags: ["Development", "React", "TypeScript"],
      lastUsed: "5 hours ago",
      uses: 89,
      isFavorite: true,
      isPublic: false,
    },
    {
      title: "Email Marketing Template",
      description: "Professional email templates for marketing campaigns with high conversion rates",
      tags: ["Marketing", "Email"],
      lastUsed: "1 day ago",
      uses: 34,
      isFavorite: false,
      isPublic: true,
    },
    {
      title: "Code Review Checklist",
      description: "Comprehensive checklist for thorough code reviews and quality assurance",
      tags: ["Development", "Code Review"],
      lastUsed: "2 days ago",
      uses: 67,
      isFavorite: false,
      isPublic: false,
    },
    {
      title: "Social Media Scheduler",
      description: "Schedule and optimize social media posts across multiple platforms",
      tags: ["Social Media", "Marketing"],
      lastUsed: "3 days ago",
      uses: 156,
      isFavorite: true,
      isPublic: true,
    },
    {
      title: "API Documentation Generator",
      description: "Generate comprehensive API documentation from OpenAPI specifications",
      tags: ["Development", "Documentation"],
      lastUsed: "1 week ago",
      uses: 23,
      isFavorite: false,
      isPublic: false,
    },
  ];

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredPrompts = prompts.filter(prompt => 
    selectedTags.length === 0 || 
    prompt.tags.some(tag => selectedTags.includes(tag))
  );

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50/20 via-white to-purple-50/20 dark:from-gray-900 dark:to-gray-800">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold">Prompt Library</h1>
                <p className="text-muted-foreground mt-1">
                  Manage and organize your AI prompts
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search prompts..." 
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[140px]">
                    <SortAsc className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Recent</SelectItem>
                    <SelectItem value="popular">Most Used</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="created">Created Date</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select>
                  <SelectTrigger className="w-[120px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="favorites">Favorites</SelectItem>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Tag Filter */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Filter by tags:</span>
                {selectedTags.length > 0 && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setSelectedTags([])}
                    className="h-6 px-2 text-xs"
                  >
                    Clear all
                  </Button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "secondary"}
                    className="cursor-pointer hover:bg-primary/80 transition-colors"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Prompts Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    {filteredPrompts.length} prompts found
                  </span>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current text-yellow-500" />
                      <span>Favorites</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="h-3 w-3" />
                      <span>Public</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Lock className="h-3 w-3" />
                      <span>Private</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`grid gap-4 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
                {filteredPrompts.map((prompt, index) => (
                  <PromptCard key={index} {...prompt} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}