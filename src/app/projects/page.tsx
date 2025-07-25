import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { ArrowLeft } from 'lucide-react';


function ProjectsPage() {
  return (
    <main className="p-4">
      <div className="max-w-2xl mx-auto space-y-8">
       <ProjectGrid />
        <div className="flex justify-center">
          <Button asChild variant="outline">
            <Link href="/#">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

export default ProjectsPage;