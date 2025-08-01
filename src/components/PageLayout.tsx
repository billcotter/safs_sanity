import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface PageLayoutProps {
  children: ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
}

export function PageLayout({
  children,
  className,
  maxWidth = 'xl',
  padding = 'lg',
}: PageLayoutProps) {
  const maxWidthClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-none',
  }

  const paddingClasses = {
    sm: 'px-4 py-6',
    md: 'px-6 py-8',
    lg: 'px-8 py-12',
    xl: 'px-12 py-16',
  }

  return (
    <div className="bg-sandstone min-h-screen">
      <main
        className={cn(
          'mx-auto',
          maxWidthClasses[maxWidth],
          paddingClasses[padding],
          className
        )}
      >
        {children}
      </main>
    </div>
  )
}
