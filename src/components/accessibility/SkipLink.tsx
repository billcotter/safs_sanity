interface SkipLinkProps {
  href?: string
  children?: React.ReactNode
  className?: string
}

export function SkipLink({
  href = '#main-content',
  children = 'Skip to content',
  className = '',
}: SkipLinkProps) {
  return (
    <a href={href} className={`skip-link ${className}`}>
      {children}
    </a>
  )
}
