import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export function About() {
    return (
        <Card className="p-4 lg:grid lg:place-content-center">

            <CardHeader className="text-center">
                <CardTitle className="text-xl font-semibold tracking-wide font-mono">
                    About Me
                </CardTitle>
            </CardHeader>

            <CardContent className="p-0">
                <p className="text-pretty leading-relaxed font-normal text-justify text-base text-muted-foreground font-sans">
                A developer with a B.Tech in IT who loves building websites and APIs. I’ve built web projects—some failed, some worked, all ended with bugs. I mainly work with JavaScript frameworks, lean toward frontend, and know my way around full stack development. Would love to collaborate with you.


                </p>
            </CardContent>

        </Card>
    )
};
