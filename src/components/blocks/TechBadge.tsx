import { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';

type TechBadgeProps = {
  name: string 
  icon: ReactNode // Icon component to display
  variant?: 'default' | 'secondary' | 'outline' 
  className?: string 
}

export function TechBadge({ name, icon, variant = 'default', className = '' }: TechBadgeProps) {
  return (
    <Badge
      className={`text-sm px-2 py-1 flex gap-2 items-center justify-center font-sans ${className}`} 
      variant={variant} 
      aria-label={name}
    >
      <span aria-hidden="true">{icon}</span> 
      <span className="font-sans">{name}</span> 
    </Badge>
  )
};