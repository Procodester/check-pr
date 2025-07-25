import {Card, CardContent, CardFooter, CardHeader,CardTitle} from "@/components/ui/card";
import { SocialIcon } from "react-social-icons";
import { contactLinks } from "@/data/social.data";

export function Socials() {
    return (
        <Card className="p-4">
            <CardHeader className="text-center">
                <CardTitle className="text-xl font-semibold tracking-wide font-mono">
                    Connect
                </CardTitle>
            </CardHeader>

            <CardContent className="p-0">
                <div className="flex justify-center items-center gap-4">
                    {contactLinks.map((link) => (
                        <SocialIcon
                            key={link.label}
                            url={link.url}
                            href={link.url}
                            aria-label={link.label}
                            className="border border-border rounded-full"
                            style={{ height: "2.5rem", width: "2.5rem" }}
                        />
                    ))}
                </div>                
            </CardContent>

           
        </Card>
    )
};


