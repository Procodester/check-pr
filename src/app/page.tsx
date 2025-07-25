import { Profile,Socials,About,Technologies, Resume,CurrentRole,ProjectsCarousel } from "@/components/sections/";

export default function Home() {
  return (
    
      <main className="p-4 grid place-items-center">
        <div className="max-w-md mx-auto space-y-4 lg:space-y-0 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:grid-rows-4 lg:gap-2">
          <div className="lg:col-start-2 lg:row-start-1 lg:col-span-1 lg:row-span-1 lg:*:h-full"><Profile /></div>
          <div className="lg:col-start-2 lg:row-start-2 lg:col-span-1 lg:row-span-2 lg:*:h-full"><About /></div>
          <div className="lg:col-start-1 lg:row-start-4 lg:col-span-1 lg:row-span-1 lg:*:h-full"><CurrentRole /></div>
          <div className="lg:col-start-2 lg:row-start-4 lg:col-span-1 lg:row-span-1 lg:*:h-full"><Socials /></div>
          <div className="lg:col-start-1 lg:row-start-1 lg:col-span-1 lg:row-span-2 lg:*:h-full"><Technologies /></div>
          <div className="lg:col-start-3 lg:row-start-1 lg:col-span-1 lg:row-span-4 lg:*:h-full"><ProjectsCarousel /></div>
          <div className="lg:col-start-1 lg:row-start-3 lg:col-span-1 lg:row-span-1 lg:*:h-full"><Resume /></div>
        </div>
      </main>



  );
}
