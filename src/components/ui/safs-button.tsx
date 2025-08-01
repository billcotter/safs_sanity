import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'outline'
    | 'ghost'
    | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  fullWidth?: boolean;
  href?: string;
  external?: boolean;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      icon: Icon,
      iconPosition = 'left',
      loading = false,
      fullWidth = false,
      href,
      external = false,
      asChild = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95';

    const variants = {
      // Primary: Ocean Blue background, Sandstone text (tickets, main CTAs)
      primary:
        'bg-ocean-blue text-sandstone hover:bg-ocean-blue-dark focus:ring-ocean-blue shadow-md hover:shadow-lg hover:-translate-y-0.5',

      // Secondary: Terracotta background, Sandstone text (secondary actions)
      secondary:
        'bg-terracotta text-sandstone hover:bg-terracotta/90 focus:ring-terracotta shadow-md hover:shadow-lg hover:-translate-y-0.5',

      // Tertiary: Ochre background, Charcoal text (highlights, awards)
      tertiary:
        'bg-ochre text-charcoal hover:bg-ochre/90 focus:ring-ochre shadow-md hover:shadow-lg hover:-translate-y-0.5',

      // Outline: Ocean Blue border, Ocean Blue text (secondary actions)
      outline:
        'border-2 border-ocean-blue text-ocean-blue bg-transparent hover:bg-ocean-blue hover:text-sandstone focus:ring-ocean-blue hover:-translate-y-0.5',

      // Ghost: Minimal styling for subtle actions
      ghost:
        'text-ocean-blue hover:bg-sandstone hover:text-ocean-blue focus:ring-ocean-blue',

      // Accent: Charcoal background for dark sections
      accent:
        'bg-charcoal text-sandstone hover:bg-charcoal/90 focus:ring-charcoal shadow-md hover:shadow-lg hover:-translate-y-0.5',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm rounded-md gap-1.5',
      md: 'px-4 py-2 text-sm rounded-md gap-2',
      lg: 'px-6 py-3 text-base rounded-lg gap-2',
      xl: 'px-8 py-4 text-lg rounded-lg gap-3',
    };

    const buttonClasses = cn(
      baseClasses,
      variants[variant],
      sizes[size],
      fullWidth && 'w-full',
      loading && 'cursor-wait',
      className
    );

    const content = (
      <>
        {loading && (
          <div className='animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent' />
        )}
        {Icon && iconPosition === 'left' && !loading && (
          <Icon
            className={cn(
              'flex-shrink-0',
              size === 'sm' ? 'h-4 w-4' : size === 'xl' ? 'h-6 w-6' : 'h-5 w-5'
            )}
          />
        )}
        {children}
        {Icon && iconPosition === 'right' && !loading && (
          <Icon
            className={cn(
              'flex-shrink-0',
              size === 'sm' ? 'h-4 w-4' : size === 'xl' ? 'h-6 w-6' : 'h-5 w-5'
            )}
          />
        )}
      </>
    );

    // If asChild is true, render children directly (for existing Button usage)
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: cn(buttonClasses, children.props.className),
        ...props,
      });
    }

    if (href) {
      const linkProps = external
        ? { href, target: '_blank', rel: 'noopener noreferrer' }
        : { href };

      if (external) {
        return (
          <a {...linkProps} className={buttonClasses}>
            {content}
          </a>
        );
      }

      return (
        <Link {...linkProps} className={buttonClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button
        className={buttonClasses}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
