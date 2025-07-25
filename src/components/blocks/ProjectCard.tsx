"use client"

import { ReactNode,useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { TechBadge } from '@/components/blocks/TechBadge'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


type ProjectCardProps = {
  title: string
  description: string
  imageSrc: string
  techStack: {
    name: string,
    icon: ReactNode 
  }[]
  liveUrl: string
  repoUrl: string
}

export function ProjectCard({title,description,imageSrc,techStack,liveUrl,repoUrl}: ProjectCardProps) {

  const [imageError, setImageError] = useState(false)

  return (
    <Card className="border max-w-sm mx-auto p-0">
      <CardContent className="p-0">
        
        <div className="p-3">

          <div className="bg-gray-100 p-2 flex items-center space-x-2 rounded-t-2xl">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
          </div>
          
          {imageError ? (
            <div className="w-full h-[200px] flex items-center justify-center text-muted-foreground  rounded-b-xl bg-secondary text-xl font-sans font-medium">
              {title}
            </div>
          ) : (
            <Image
              src={imageSrc}
              alt={title}
              priority={false}
              unoptimized={true}
              width={"1280"}
              height={"720"}
              loading="lazy"
              className="aspect-video rounded-b-xl"
              onError={() => setImageError(true)} 
            />
          )}
        </div>
 
        <Separator orientation="horizontal" />

        <div className="p-4 space-y-4">

          <div className="space-y-2">
            <h2 className="text-xl font-semibold tracking-wide font-mono">{title}</h2>
            <p className="text-sm font-normal text-wrap text-muted-foreground font-sans">{description}</p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {techStack.map((item) =>
                <TechBadge
                  key={item.name}
                  name={item.name}
                  icon={item.icon}
                  variant="secondary"
                  className="text-xs"
                />
              )
            }
          </div>

          <div className="mt-5 flex items-center gap-4">
            <Button asChild variant="outline" size="sm" className="rounded-sm">
              <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={`1rem`} className="mr-2" />
                <span className="text-sm font-mono">View</span>
              </Link>
            </Button>

            <Button asChild variant="outline" size="sm" className="rounded-sm">
              <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                <i className="devicon-github-original mr-2" />
                <span className="text-sm font-mono">Repo</span>
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
};
