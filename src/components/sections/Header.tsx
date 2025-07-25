import { ModeToggle } from "@/components/blocks/ThemeToggle";

export function Header() {
  return (
    <header className="px-4 py-2">
      <div className="flex justify-end">
        <ModeToggle />
      </div>
    </header>
  )
};

