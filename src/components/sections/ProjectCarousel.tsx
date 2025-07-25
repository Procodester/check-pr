"use client"

import { useRef } from "react";
import {ProjectCard} from "../blocks/ProjectCard";
import Autoplay from 'embla-carousel-autoplay';
import {Carousel,CarouselContent,CarouselItem} from "@/components/ui/carousel";
import {Card,CardContent,CardFooter} from "@/components/ui/card";
import { projects } from "@/data/project.data";
import { Button } from '@/components/ui/button';
import Link from "next/link";

export function ProjectsCarousel() {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: false })
  )
  return (
    <Card className="p-4">
      <CardContent className="p-0">
        <Carousel
          plugins={[plugin.current]}
          className="mx-auto "
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index}>
                <div>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    imageSrc={project.imageSrc}
                    liveUrl={project.liveUrl}
                    repoUrl={project.repoUrl}
                    techStack={project.techStack}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CardContent>

      <CardFooter className="mt-auto">
          <Button asChild variant="outline" className="cursor-pointer mx-auto">
            <Link href="/projects" className="flex items-center gap-2">
            View All Projects
            </Link>
          </Button>
      </CardFooter>
    </Card>

  )
};
