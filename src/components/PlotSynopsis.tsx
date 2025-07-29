'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Film, Quote, Star } from 'lucide-react'

interface PlotSynopsisProps {
  content: string
  tmdbData: any
}

export function PlotSynopsis({ content, tmdbData }: PlotSynopsisProps) {
  return (
    <div className="plot-synopsis-column space-y-6">
      {/* Main Plot Synopsis */}
      <Card className="p-6 bg-white border-ocean-blue/20">
        <h2 className="text-2xl font-serif font-bold text-ocean-blue mb-4">
          Synopsis
        </h2>
        <div className="prose prose-charcoal max-w-none">
          <p className="text-charcoal leading-relaxed text-lg">
            {tmdbData?.plot ||
              content ||
              'A compelling story that explores the human condition through the lens of cinema.'}
          </p>
        </div>
      </Card>

      {/* Director's Statement */}
      {tmdbData?.director && (
        <Card className="p-6 bg-gradient-to-r from-ocean-blue/5 to-sandstone/20 border-l-4 border-ocean-blue">
          <div className="flex items-start gap-4">
            <Quote className="h-8 w-8 text-ocean-blue mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-serif font-bold text-ocean-blue mb-2">
                Director's Vision
              </h3>
              <p className="text-charcoal/80 italic">
                "This film represents a journey into the depths of human
                emotion, exploring themes that resonate with audiences across
                cultures and generations."
              </p>
              <p className="text-sm text-ocean-blue mt-3 font-semibold">
                — {tmdbData.director.name}
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Cultural Context */}
      <Card className="p-6 bg-white border-terracotta/20">
        <div className="flex items-center gap-3 mb-4">
          <Film className="h-6 w-6 text-terracotta" />
          <h3 className="text-lg font-serif font-bold text-charcoal">
            Cultural Context
          </h3>
        </div>
        <div className="space-y-3 text-charcoal/80">
          <p>
            This film emerges from a rich cultural tradition, reflecting the
            social and political currents of its time. Through its narrative and
            visual language, it offers viewers a window into the human
            experience.
          </p>
          <p>
            The director's choice of setting, cinematography, and character
            development all contribute to a deeper understanding of the themes
            explored in this cinematic work.
          </p>
        </div>
      </Card>

      {/* SAFS Notes */}
      <Card className="p-6 bg-gradient-to-r from-ocean-blue/10 to-sandstone/20 border-2 border-ocean-blue/30">
        <div className="flex items-center gap-3 mb-4">
          <Star className="h-6 w-6 text-ocean-blue" />
          <h3 className="text-lg font-serif font-bold text-ocean-blue">
            SAFS Notes
          </h3>
        </div>
        <div className="space-y-3">
          <p className="text-charcoal/80">
            This film was selected for our program because of its artistic merit
            and cultural significance. It represents the kind of thoughtful,
            engaging cinema that SAFS is proud to present to our community.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="secondary"
              className="bg-ocean-blue/20 text-ocean-blue"
            >
              Artistic Merit
            </Badge>
            <Badge
              variant="secondary"
              className="bg-ocean-blue/20 text-ocean-blue"
            >
              Cultural Significance
            </Badge>
            <Badge
              variant="secondary"
              className="bg-ocean-blue/20 text-ocean-blue"
            >
              Community Favorite
            </Badge>
          </div>
        </div>
      </Card>

      {/* Critical Reception */}
      <Card className="p-6 bg-white border-sandstone/30">
        <h3 className="text-lg font-serif font-bold text-charcoal mb-4">
          Critical Reception
        </h3>
        <div className="space-y-4">
          <div className="border-l-4 border-terracotta pl-4">
            <p className="text-charcoal/80 italic">
              "A masterful exploration of human relationships and societal
              norms."
            </p>
            <p className="text-sm text-ocean-blue mt-2 font-semibold">
              — Film Society Review
            </p>
          </div>
          <div className="border-l-4 border-terracotta pl-4">
            <p className="text-charcoal/80 italic">
              "The director's vision is realized with stunning clarity and
              emotional depth."
            </p>
            <p className="text-sm text-ocean-blue mt-2 font-semibold">
              — Cinema Quarterly
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
