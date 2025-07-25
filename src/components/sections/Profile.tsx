import { Card,CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Code } from 'lucide-react';

export function Profile() {
    return (
        <Card className="p-4 lg:grid">
            <div className="flex items-center justify-center gap-4">
                <Avatar className="w-24 h-24 rounded-2xl">
                    <AvatarImage src="/assets/profile/profile.webp" loading="lazy" alt="Devansh Saini Avtar" />
                    <AvatarFallback className="text-primary text-2xl font-mono">DS</AvatarFallback>
                </Avatar>

                <CardContent className="p-0 w-full">
                    <h2 className="text-3xl font-semibold tracking-wide font-sans">
                        Devansh Saini
                    </h2>

                    <Badge className="mt-2 bg-accent-foreground text-sm space-x-0.5">
                        <span><Code size={`0.875rem`} /></span>
                        <span className="text-pretty font-medium text-sm font-mono">Web Developer</span> 
                    </Badge>
                </CardContent>
            </div>
        </Card>
    )
};


