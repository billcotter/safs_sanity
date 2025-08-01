'use client'

import { Button } from '@/components/ui/safs-button'
import { cn } from '@/lib/utils'
import {
  Award,
  Calendar,
  Film,
  Heart,
  LucideIcon,
  MapPin,
  Users,
} from 'lucide-react'
import Image from 'next/image'

interface CTAButton {
  text: string
  href: string
  variant?: 'primary' | 'secondary' | 'outline'
  icon?: LucideIcon
  className?: string
}

interface PageBannerProps {
  backgroundImage: string
  backgroundAlt: string
  title: string
  subtitle?: string
  ctaButtons?: CTAButton[]
  className?: string
  children?: React.ReactNode
}

export function PageBanner({
  backgroundImage,
  backgroundAlt,
  title,
  subtitle,
  ctaButtons = [],
  className,
  children,
}: PageBannerProps) {
  // Icon mapping for CTA buttons
  const iconMap: Record<string, LucideIcon> = {
    'View Films': Film,
    'Purchase Tickets': Calendar,
    'Browse Archive': Film,
    'View Events': Calendar,
    'Our Mission': Heart,
    'Join Us': Users,
    'View Locations': MapPin,
    'Plan Your Visit': MapPin,
    'View Plans': Award,
    'Sign Up Today': Users,
    'Sponsor Packages': Award,
    'Contact Us': Users,
  }

  // Add icons to buttons if not already present
  const ctaButtonsWithIcons = ctaButtons.map((button) => ({
    ...button,
    icon: button.icon || iconMap[button.text],
  }))

  return (
    <section
      className={cn('relative h-[60vh] w-full overflow-hidden', className)}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/30" />
      </div>

      {/* Banner Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center space-y-6 px-4 max-w-4xl mx-auto">
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sandstone drop-shadow-lg">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg md:text-xl text-sandstone/90 max-w-2xl mx-auto drop-shadow-md">
              {subtitle}
            </p>
          )}

          {/* CTA Buttons */}
          {ctaButtonsWithIcons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              {ctaButtonsWithIcons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || 'secondary'}
                  size="lg"
                  icon={button.icon}
                  href={button.href}
                  className={cn(
                    'min-w-[140px] shadow-lg',
                    button.variant === 'primary'
                      ? 'bg-terracotta hover:bg-terracotta/90 text-sandstone'
                      : button.variant === 'outline'
                      ? 'bg-transparent border-2 border-sandstone text-sandstone hover:bg-sandstone hover:text-charcoal'
                      : 'bg-ocean-blue hover:bg-ocean-blue/90 text-sandstone',
                    button.className
                  )}
                >
                  {button.text}
                </Button>
              ))}
            </div>
          )}

          {/* Custom Content */}
          {children}
        </div>
      </div>
    </section>
  )
}
