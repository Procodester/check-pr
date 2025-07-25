import {Card,CardContent,CardHeader,CardTitle} from "@/components/ui/card"

export function CurrentRole() {
  return (
    <Card className="p-4">
      <CardHeader className="">
        <CardTitle className="text-xl font-semibold tracking-wide text-center font-mono">
          💼 Open to Work
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <p className="text-pretty leading-relaxed text-base text-center text-muted-foreground font-sans ">
          🚀 Seeking frontend or full-stack roles.
        </p>
      </CardContent>
    </Card>
  )
};


