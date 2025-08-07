import { Heart, Eye, Share2, Clock, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PromptCardProps {
  title: string;
  description: string;
  tags: string[];
  lastUsed: string;
  uses: number;
  isFavorite: boolean;
  isPublic?: boolean;
}

export function PromptCard({
  title,
  description,
  tags,
  lastUsed,
  uses,
  isFavorite,
  isPublic = false,
}: PromptCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-md hover:shadow-blue-500/10 border-border/50 bg-card/50 backdrop-blur">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold line-clamp-1">{title}</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            className={`h-8 w-8 p-0 ${isFavorite ? "text-red-500 hover:text-red-600" : "text-muted-foreground hover:text-foreground"}`}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              <Tag className="mr-1 h-3 w-3" />
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {lastUsed}
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              {uses} uses
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            {isPublic && (
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <Share2 className="h-3 w-3" />
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}