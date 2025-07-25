import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TechBadge } from "@/components/blocks/TechBadge";
import { techStack } from "@/data/techStack.data";

export function Technologies() {
  return (
    <Card className="p-4">
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-semibold tracking-wide font-mono">
          Tech Stack
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <div className="flex flex-wrap gap-2">
          {Object.entries(techStack).map(([name, icon]) => (
            <TechBadge
              key={name}
              name={name}
              icon={icon}
              variant="outline" 
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
};
