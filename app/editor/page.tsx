"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { 
  Save, 
  Play, 
  Share2, 
  Plus, 
  X, 
  Copy,
  Download,
  Lightbulb,
  Code,
  Eye
} from "lucide-react";

export default function Editor() {
  const [title, setTitle] = useState("Untitled Prompt");
  const [description, setDescription] = useState("");
  const [prompt, setPrompt] = useState(`You are an expert assistant helping users with their queries. Please provide detailed, helpful, and accurate responses.

Task: {{task}}
Context: {{context}}
Requirements:
- Be specific and actionable
- Provide examples when relevant
- Keep the response {{tone}} in tone

Please respond:`);
  const [tags, setTags] = useState<string[]>(["AI", "Assistant"]);
  const [newTag, setNewTag] = useState("");
  const [variables, setVariables] = useState([
    { name: "task", description: "The main task or question", example: "Write a blog post about AI" },
    { name: "context", description: "Additional context or background", example: "For a tech startup audience" },
    { name: "tone", description: "Desired tone of response", example: "professional, casual, friendly" },
  ]);
  const [testInput, setTestInput] = useState("");
  const [testOutput, setTestOutput] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const addVariable = () => {
    setVariables([...variables, { name: "", description: "", example: "" }]);
  };

  const updateVariable = (index: number, field: string, value: string) => {
    const updated = [...variables];
    updated[index] = { ...updated[index], [field]: value };
    setVariables(updated);
  };

  const removeVariable = (index: number) => {
    setVariables(variables.filter((_, i) => i !== index));
  };

  const runTest = () => {
    // Simulate API call
    setTestOutput("This is a simulated response from your prompt. In a real implementation, this would be the actual AI response based on your prompt and test input.");
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50/20 via-white to-purple-50/20 dark:from-gray-900 dark:to-gray-800">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto p-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-bold">Prompt Editor</h1>
                <p className="text-muted-foreground mt-1">
                  Create and test your AI prompts
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" className="gap-2">
                  <Copy className="h-4 w-4" />
                  Copy
                </Button>
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Export
                </Button>
                <Button variant="outline" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
                <Button className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Save className="h-4 w-4" />
                  Save Prompt
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Editor Panel */}
              <div className="lg:col-span-2 space-y-6">
                {/* Basic Info */}
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe what this prompt does..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-2"
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label>Tags</Label>
                      <div className="flex flex-wrap gap-2 mt-2 mb-2">
                        {tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="gap-1">
                            {tag}
                            <X 
                              className="h-3 w-3 cursor-pointer hover:text-destructive" 
                              onClick={() => removeTag(tag)}
                            />
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Add a tag..."
                          value={newTag}
                          onChange={(e) => setNewTag(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && addTag()}
                          className="flex-1"
                        />
                        <Button onClick={addTag} size="sm">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="public">Make Public</Label>
                        <p className="text-sm text-muted-foreground">Allow others to discover and use this prompt</p>
                      </div>
                      <Switch
                        id="public"
                        checked={isPublic}
                        onCheckedChange={setIsPublic}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Prompt Content */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Code className="h-5 w-5" />
                        Prompt Content
                      </CardTitle>
                      <Button variant="ghost" size="sm" className="text-muted-foreground">
                        <Lightbulb className="h-4 w-4 mr-2" />
                        Tips
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      rows={12}
                      className="font-mono text-sm"
                      placeholder="Enter your prompt here... Use {{variable}} for dynamic content."
                    />
                  </CardContent>
                </Card>

                {/* Variables */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Variables</CardTitle>
                      <Button onClick={addVariable} size="sm" variant="outline">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Variable
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {variables.map((variable, index) => (
                      <div key={index} className="grid grid-cols-12 gap-2 items-end">
                        <div className="col-span-3">
                          <Label>Name</Label>
                          <Input
                            value={variable.name}
                            onChange={(e) => updateVariable(index, 'name', e.target.value)}
                            placeholder="variable_name"
                          />
                        </div>
                        <div className="col-span-4">
                          <Label>Description</Label>
                          <Input
                            value={variable.description}
                            onChange={(e) => updateVariable(index, 'description', e.target.value)}
                            placeholder="What this variable is for"
                          />
                        </div>
                        <div className="col-span-4">
                          <Label>Example</Label>
                          <Input
                            value={variable.example}
                            onChange={(e) => updateVariable(index, 'example', e.target.value)}
                            placeholder="Example value"
                          />
                        </div>
                        <div className="col-span-1">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => removeVariable(index)}
                            className="text-destructive hover:text-destructive"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Test Panel */}
              <div className="lg:col-span-1">
                <Card className="sticky top-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Play className="h-5 w-5" />
                      Test Prompt
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="input" className="space-y-4">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="input">Input</TabsTrigger>
                        <TabsTrigger value="output">Output</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="input" className="space-y-4">
                        <div>
                          <Label>Test Input</Label>
                          <Textarea
                            value={testInput}
                            onChange={(e) => setTestInput(e.target.value)}
                            placeholder="Enter test values for your variables..."
                            rows={6}
                            className="mt-2"
                          />
                        </div>
                        
                        {variables.map((variable, index) => (
                          <div key={index} className="space-y-1">
                            <Label className="text-xs font-medium text-muted-foreground">
                              {variable.name || `Variable ${index + 1}`}
                            </Label>
                            <Input
                              placeholder={variable.example || "Enter value..."}
                              className="text-sm"
                            />
                          </div>
                        ))}
                        
                        <Button onClick={runTest} className="w-full">
                          <Play className="h-4 w-4 mr-2" />
                          Run Test
                        </Button>
                      </TabsContent>
                      
                      <TabsContent value="output" className="space-y-4">
                        <div>
                          <Label>Test Output</Label>
                          <div className="mt-2 p-3 bg-muted rounded-md min-h-[200px]">
                            {testOutput ? (
                              <p className="text-sm whitespace-pre-wrap">{testOutput}</p>
                            ) : (
                              <p className="text-sm text-muted-foreground italic">
                                Run a test to see the output here...
                              </p>
                            )}
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}