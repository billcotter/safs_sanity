interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export function Layout({ children, className = '' }: LayoutProps) {
  return (
    <div className={`min-h-full py-8 ${className}`}>
      <div className="container mx-auto px-4">{children}</div>
    </div>
  )
}
