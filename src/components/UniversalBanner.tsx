import {
  fallbackBannerImage,
  getPageBannerConfig,
  PageType,
} from '@/lib/bannerImages'
import { PageBanner } from './PageBanner'

interface UniversalBannerProps {
  pageType: PageType
  customTitle?: string
  customSubtitle?: string
  customBackgroundImage?: string
  customBackgroundAlt?: string
  className?: string
}

export async function UniversalBanner({
  pageType,
  customTitle,
  customSubtitle,
  customBackgroundImage,
  customBackgroundAlt,
  className,
}: UniversalBannerProps) {
  const config = getPageBannerConfig(pageType)

  // Get background image (custom takes precedence, then config, then fallback)
  let backgroundImage = customBackgroundImage
  let backgroundAlt = customBackgroundAlt

  if (!backgroundImage || !backgroundAlt) {
    try {
      const imageConfig = await config.getBackgroundImage()
      backgroundImage = backgroundImage || imageConfig.src
      backgroundAlt = backgroundAlt || imageConfig.alt
    } catch (error) {
      console.warn(`Failed to load banner image for ${pageType}:`, error)
      backgroundImage = fallbackBannerImage.src
      backgroundAlt = fallbackBannerImage.alt
    }
  }

  return (
    <PageBanner
      backgroundImage={backgroundImage}
      backgroundAlt={backgroundAlt}
      title={customTitle || config.title}
      subtitle={customSubtitle || config.subtitle}
      ctaButtons={config.ctaButtons}
      className={className}
    />
  )
}
