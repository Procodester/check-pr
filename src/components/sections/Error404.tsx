import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Error404() {
  return (
    <Card className="max-w-lg mx-auto text-center shadow-xl">
    <CardHeader>
      <CardTitle className="text-destructive text-5xl font-mono">404</CardTitle>
      <p className="text-muted-foreground mt-2 text-lg font-sans">
        Lost in the code, are we?
      </p>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground mb-6 font-sans">
        This page doesn&apos;t exist. Maybe you meant to check out my portfolio?
      </p>
      <Button asChild>
        <Link href="/">Show me the portfolio</Link>
      </Button>
    </CardContent>
  </Card>
  )
}

export default Error404;