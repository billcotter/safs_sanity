import { ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav className={`mb-6 ${className}`}>
      <ol className="flex items-center space-x-2 text-sm text-charcoal/60">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-ocean-blue transition-colors"
          >
            <Home className="h-3 w-3" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1" />
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-ocean-blue transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-charcoal">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
} 