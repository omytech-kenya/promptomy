"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Key, 
  Bell, 
  Shield, 
  CreditCard, 
  Trash2,
  Plus,
  Copy,
  Eye,
  EyeOff,
  Save
} from "lucide-react";

export default function Settings() {
  const [showApiKey, setShowApiKey] = useState(false);
  const [apiKeys, setApiKeys] = useState([
    {
      id: 1,
      name: "Production API",
      key: "pk_live_1234567890abcdef",
      created: "2024-01-15",
      lastUsed: "2 hours ago",
    },
    {
      id: 2,
      name: "Development API",
      key: "pk_test_abcdef1234567890",
      created: "2024-01-10",
      lastUsed: "1 day ago",
    }
  ]);

  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    bio: "AI enthusiast and developer",
    company: "Tech Startup Inc.",
    website: "https://johndoe.dev"
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    promptShares: true,
    weeklyDigest: false,
    securityAlerts: true,
  });

  const [privacy, setPrivacy] = useState({
    publicProfile: true,
    showActivity: false,
    allowDiscovery: true,
  });

  const maskApiKey = (key: string) => {
    return key.substring(0, 12) + "•".repeat(20) + key.substring(key.length - 4);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50/20 via-white to-purple-50/20 dark:from-gray-900 dark:to-gray-800">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Page Header */}
            <div>
              <h1 className="text-3xl font-bold mb-2">Settings</h1>
              <p className="text-muted-foreground">
                Manage your account preferences and API configuration
              </p>
            </div>

            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="profile" className="gap-2">
                  <User className="h-4 w-4" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="api" className="gap-2">
                  <Key className="h-4 w-4" />
                  API Keys
                </TabsTrigger>
                <TabsTrigger value="notifications" className="gap-2">
                  <Bell className="h-4 w-4" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger value="privacy" className="gap-2">
                  <Shield className="h-4 w-4" />
                  Privacy
                </TabsTrigger>
                <TabsTrigger value="billing" className="gap-2">
                  <CreditCard className="h-4 w-4" />
                  Billing
                </TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src="/avatars/profile.png" />
                        <AvatarFallback className="text-lg">JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <Button variant="outline" size="sm">Change Avatar</Button>
                        <p className="text-sm text-muted-foreground mt-1">
                          JPG, PNG or GIF. Max size 2MB.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={profile.name}
                          onChange={(e) => setProfile({...profile, name: e.target.value})}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profile.email}
                          onChange={(e) => setProfile({...profile, email: e.target.value})}
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="bio">Bio</Label>
                      <Input
                        id="bio"
                        value={profile.bio}
                        onChange={(e) => setProfile({...profile, bio: e.target.value})}
                        placeholder="Tell us about yourself..."
                        className="mt-2"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={profile.company}
                          onChange={(e) => setProfile({...profile, company: e.target.value})}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          value={profile.website}
                          onChange={(e) => setProfile({...profile, website: e.target.value})}
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <Button className="gap-2">
                      <Save className="h-4 w-4" />
                      Save Changes
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* API Keys Tab */}
              <TabsContent value="api">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>API Keys</CardTitle>
                        <Button className="gap-2">
                          <Plus className="h-4 w-4" />
                          Create New Key
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {apiKeys.map((apiKey) => (
                          <div key={apiKey.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex-1">
                              <div className="font-medium mb-1">{apiKey.name}</div>
                              <div className="flex items-center gap-2 mb-2">
                                <code className="text-sm bg-muted px-2 py-1 rounded font-mono">
                                  {maskApiKey(apiKey.key)}
                                </code>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => navigator.clipboard.writeText(apiKey.key)}
                                >
                                  <Copy className="h-3 w-3" />
                                </Button>
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Created {apiKey.created} • Last used {apiKey.lastUsed}
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Usage & Limits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-muted rounded-lg">
                          <div className="text-2xl font-bold">45,231</div>
                          <div className="text-sm text-muted-foreground">API Calls This Month</div>
                        </div>
                        <div className="text-center p-4 bg-muted rounded-lg">
                          <div className="text-2xl font-bold">4,769</div>
                          <div className="text-sm text-muted-foreground">Remaining</div>
                        </div>
                        <div className="text-center p-4 bg-muted rounded-lg">
                          <div className="text-2xl font-bold">99.8%</div>
                          <div className="text-sm text-muted-foreground">Success Rate</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Notifications Tab */}
              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Email Notifications</div>
                          <div className="text-sm text-muted-foreground">
                            Receive email updates about your prompts and account
                          </div>
                        </div>
                        <Switch
                          checked={notifications.emailNotifications}
                          onCheckedChange={(checked) => 
                            setNotifications({...notifications, emailNotifications: checked})
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Prompt Shares</div>
                          <div className="text-sm text-muted-foreground">
                            Get notified when someone uses your shared prompts
                          </div>
                        </div>
                        <Switch
                          checked={notifications.promptShares}
                          onCheckedChange={(checked) => 
                            setNotifications({...notifications, promptShares: checked})
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Weekly Digest</div>
                          <div className="text-sm text-muted-foreground">
                            Weekly summary of your prompt activity
                          </div>
                        </div>
                        <Switch
                          checked={notifications.weeklyDigest}
                          onCheckedChange={(checked) => 
                            setNotifications({...notifications, weeklyDigest: checked})
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Security Alerts</div>
                          <div className="text-sm text-muted-foreground">
                            Important security and account notifications
                          </div>
                        </div>
                        <Switch
                          checked={notifications.securityAlerts}
                          onCheckedChange={(checked) => 
                            setNotifications({...notifications, securityAlerts: checked})
                          }
                        />
                      </div>
                    </div>

                    <Button className="gap-2">
                      <Save className="h-4 w-4" />
                      Save Preferences
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Privacy Tab */}
              <TabsContent value="privacy">
                <Card>
                  <CardHeader>
                    <CardTitle>Privacy & Security</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Public Profile</div>
                          <div className="text-sm text-muted-foreground">
                            Make your profile visible to other users
                          </div>
                        </div>
                        <Switch
                          checked={privacy.publicProfile}
                          onCheckedChange={(checked) => 
                            setPrivacy({...privacy, publicProfile: checked})
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Show Activity</div>
                          <div className="text-sm text-muted-foreground">
                            Display your prompt creation activity
                          </div>
                        </div>
                        <Switch
                          checked={privacy.showActivity}
                          onCheckedChange={(checked) => 
                            setPrivacy({...privacy, showActivity: checked})
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Allow Discovery</div>
                          <div className="text-sm text-muted-foreground">
                            Let others find your public prompts in search
                          </div>
                        </div>
                        <Switch
                          checked={privacy.allowDiscovery}
                          onCheckedChange={(checked) => 
                            setPrivacy({...privacy, allowDiscovery: checked})
                          }
                        />
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="mb-4">
                        <h3 className="font-medium text-destructive mb-2">Danger Zone</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          These actions are permanent and cannot be undone.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">
                          Delete All My Prompts
                        </Button>
                        <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">
                          Delete My Account
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Billing Tab */}
              <TabsContent value="billing">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Current Plan</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-2xl font-bold">Pro Plan</span>
                            <Badge>Current</Badge>
                          </div>
                          <p className="text-muted-foreground">50,000 API calls per month</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">$29</div>
                          <div className="text-sm text-muted-foreground">per month</div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline">Change Plan</Button>
                        <Button variant="outline">Cancel Subscription</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Billing History</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { date: "Jan 1, 2024", amount: "$29.00", status: "Paid" },
                          { date: "Dec 1, 2023", amount: "$29.00", status: "Paid" },
                          { date: "Nov 1, 2023", amount: "$29.00", status: "Paid" },
                        ].map((invoice, index) => (
                          <div key={index} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                            <div>
                              <div className="font-medium">{invoice.date}</div>
                              <div className="text-sm text-muted-foreground">Pro Plan</div>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="font-medium">{invoice.amount}</span>
                              <Badge variant="secondary">{invoice.status}</Badge>
                              <Button variant="ghost" size="sm">Download</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}