'use client'

import { cn } from '@/lib/utils'

interface PageBannerProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  announcement?: {
    text: string
    type?: 'info' | 'warning' | 'success'
  }
  strapiMessage?: string
  className?: string
}

export function PageBanner({
  title,
  subtitle,
  backgroundImage,
  announcement,
  strapiMessage,
  className,
}: PageBannerProps) {
  const getAnnouncementStyles = (type?: string) => {
    switch (type) {
      case 'warning':
        return 'bg-ochre/20 border-ochre text-ochre-dark'
      case 'success':
        return 'bg-ocean-blue/20 border-ocean-blue text-ocean-blue-dark'
      default:
        return 'bg-terracotta/20 border-terracotta text-terracotta-dark'
    }
  }

  return (
    <>
      <div
        className={cn(
          backgroundImage
            ? 'relative bg-cover bg-center bg-no-repeat'
            : 'bg-sandstone-dark border-b border-sandstone-dark/30',
          className
        )}
        style={
          backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
        }
      >
        {backgroundImage && (
          <div className="absolute inset-0 bg-black/50"></div>
        )}
        <div
          className={cn(
            'container mx-auto px-4 py-12',
            backgroundImage ? 'relative z-10' : ''
          )}
        >
          <div className="text-center">
            <h1
              className={cn(
                'text-4xl md:text-5xl font-serif font-bold mb-4',
                backgroundImage ? 'text-white' : 'text-charcoal'
              )}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className={cn(
                  'text-xl max-w-2xl mx-auto mb-8',
                  backgroundImage ? 'text-white/90' : 'text-charcoal/80'
                )}
              >
                {subtitle}
              </p>
            )}

            {announcement && (
              <div
                className={cn(
                  'inline-block px-6 py-3 rounded-lg border-2 font-medium',
                  getAnnouncementStyles(announcement.type)
                )}
              >
                {announcement.text}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Strapi Message Box */}
      {strapiMessage && (
        <div className="bg-sandstone/10 border-l-4 border-sandstone">
          <div className="container mx-auto px-4 py-6">
            <div className="max-w-4xl mx-auto">
              <p className="text-charcoal/80 leading-relaxed">
                {strapiMessage}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
