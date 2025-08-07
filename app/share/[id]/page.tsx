"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Heart, 
  Copy, 
  Download, 
  Eye, 
  User, 
  Calendar,
  Play,
  Share2,
  Code2
} from "lucide-react";

export default function SharePrompt({ params }: { params: { id: string } }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [testValues, setTestValues] = useState({
    task: "Write a blog post about sustainable technology",
    context: "For a tech company's blog targeting developers",
    tone: "professional yet engaging"
  });

  // Mock prompt data - in real app this would be fetched based on params.id
  const prompt = {
    id: "abc123",
    title: "SEO Blog Post Generator",
    description: "Generate SEO-optimized blog posts with proper structure, keywords, and engaging content that ranks well on search engines.",
    author: "Sarah Chen",
    authorAvatar: "/avatars/sarah.png",
    createdAt: "2024-01-15",
    views: 1247,
    favorites: 89,
    tags: ["SEO", "Content", "Marketing", "Blogging"],
    content: `You are an expert SEO content writer helping users create high-quality, search-optimized blog posts.

Task: {{task}}
Context: {{context}}
Tone: {{tone}}

Instructions:
1. Create an engaging title with target keywords
2. Write a compelling meta description (150-160 characters)
3. Structure with proper H1, H2, H3 headings
4. Include relevant keywords naturally throughout
5. Add a strong call-to-action at the end

Requirements:
- Minimum 1000 words
- Include LSI keywords
- Optimize for featured snippets
- Maintain readability score above 60
- Include internal linking suggestions

Please generate the complete blog post:`,
    variables: [
      {
        name: "task",
        description: "The main topic or subject for the blog post",
        example: "Write about sustainable technology trends"
      },
      {
        name: "context",
        description: "Target audience and additional context",
        example: "For a tech startup blog targeting developers"
      },
      {
        name: "tone",
        description: "Desired writing tone and style",
        example: "professional, informative, engaging"
      }
    ]
  };

  const copyPrompt = () => {
    navigator.clipboard.writeText(prompt.content);
    // Toast notification would go here
  };

  const downloadPrompt = () => {
    const element = document.createElement("a");
    const file = new Blob([prompt.content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${prompt.title.toLowerCase().replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/20 via-white to-purple-50/20 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PROMPTOMY
            </Link>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link href="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Link href="/library">
                <Button>Browse Library</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Prompt Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-3">{prompt.title}</h1>
                <p className="text-lg text-muted-foreground mb-4">{prompt.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>by {prompt.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Created {prompt.createdAt}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    <span>{prompt.views.toLocaleString()} views</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {prompt.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  variant={isFavorited ? "default" : "outline"}
                  onClick={() => setIsFavorited(!isFavorited)}
                  className="gap-2"
                >
                  <Heart className={`h-4 w-4 ${isFavorited ? "fill-current" : ""}`} />
                  {prompt.favorites + (isFavorited ? 1 : 0)}
                </Button>
                <Button variant="outline" onClick={copyPrompt} className="gap-2">
                  <Copy className="h-4 w-4" />
                  Copy
                </Button>
                <Button variant="outline" onClick={downloadPrompt} className="gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
                <Button variant="outline" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Prompt Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="h-5 w-5" />
                    Prompt Content
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <pre className="whitespace-pre-wrap text-sm bg-muted p-4 rounded-lg border overflow-x-auto">
                      {prompt.content}
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={copyPrompt}
                      className="absolute top-2 right-2"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Variables Reference */}
              <Card>
                <CardHeader>
                  <CardTitle>Variables Reference</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {prompt.variables.map((variable, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="font-medium mb-1">{{variable.name}}</div>
                        <div className="text-sm text-muted-foreground mb-2">{variable.description}</div>
                        <div className="text-sm">
                          <span className="font-medium">Example: </span>
                          <span className="italic">{variable.example}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Test Panel */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="h-5 w-5" />
                    Try This Prompt
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {prompt.variables.map((variable, index) => (
                    <div key={index}>
                      <Label className="text-sm font-medium">{variable.name}</Label>
                      <Input
                        value={testValues[variable.name as keyof typeof testValues]}
                        onChange={(e) => setTestValues({
                          ...testValues,
                          [variable.name]: e.target.value
                        })}
                        placeholder={variable.example}
                        className="mt-1"
                      />
                    </div>
                  ))}
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Play className="h-4 w-4 mr-2" />
                    Test Prompt
                  </Button>
                  
                  <div className="pt-4 border-t">
                    <Label className="text-sm font-medium">Generated Preview</Label>
                    <Textarea
                      rows={6}
                      className="mt-2 text-sm"
                      placeholder="Test output will appear here..."
                      readOnly
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}