import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { FileInput } from 'lucide-react'
import Link from "next/link";

export function Resume() {
  return (
    <Card className="p-4 lg:grid lg:place-items-center">

      <CardContent className="p-0">
        <div className="flex justify-center">
          <Button asChild variant="ghost">
            <Link 
            href="/devansh_resume.pdf" 
            target="_blank" rel="noopener noreferrer">
              <div className="flex items-center justify-center gap-4">
                <span className="text-justify text-lg font-sans">Resume</span>
                <span> <FileInput size={`1.25rem`} /></span>
              </div>
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
};
