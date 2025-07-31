import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import {
  Calendar,
  Clock,
  ArrowLeft,
  User,
  Tag,
} from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ slug: string }>
}

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  author: string
  publishedAt: string
  featuredImage: any
  excerpt: string
  content: any[]
  tags: string[]
  film: {
    _id: string
    title: string
    slug: { current: string }
    poster: any
  }
}

// Get film data
async function getFilm(slug: string) {
  const filmQuery = `*[_type == "film" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    poster
  }`

  try {
    const film = await client.fetch(filmQuery, { slug })
    return film
  } catch (error) {
    console.error('Error fetching film:', error)
    return null
  }
}

// Get blog posts for a film
async function getBlogPosts(filmId: string): Promise<BlogPost[]> {
  const blogQuery = `*[_type == "blog" && film._ref == $filmId && isPublished == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author,
    publishedAt,
    featuredImage,
    excerpt,
    content,
    tags,
    film->{
      _id,
      title,
      slug,
      poster
    }
  }`

  try {
    const posts = await client.fetch(blogQuery, { filmId })
    return posts
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export default async function FilmBlogPage({ params }: PageProps) {
  const { slug } = await params

  // Get film data
  const film = await getFilm(slug)

  if (!film) {
    notFound()
  }

  // Get blog posts for this film
  const blogPosts = await getBlogPosts(film._id)

  return (
    <>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-ocean-blue/10 to-sandstone/20 border-b border-ocean-blue/30">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
              {film.title} Blog
            </h1>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Insights, analysis, and behind-the-scenes stories about {film.title}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs 
          items={[
            { label: 'Films', href: '/films' },
            { label: film.title, href: `/films/${film.slug.current}` },
            { label: 'Blog' }
          ]} 
        />

        {blogPosts.length > 0 ? (
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Card key={post._id} className="overflow-hidden">
                <div className="md:flex">
                  {/* Featured Image */}
                  {post.featuredImage && (
                    <div className="md:w-1/3">
                      <div className="aspect-[16/9] md:aspect-square relative">
                        <img
                          src={urlForImage(post.featuredImage).url()}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {/* Blog Content */}
                  <div className={`p-6 ${post.featuredImage ? 'md:w-2/3' : 'w-full'}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </Badge>
                      {post.author && (
                        <div className="flex items-center gap-1 text-sm text-charcoal/60">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                      )}
                    </div>

                    <h2 className="text-2xl font-serif font-bold text-charcoal mb-3">
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p className="text-charcoal/70 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}

                    {post.tags && post.tags.length > 0 && (
                      <div className="flex gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="prose prose-charcoal max-w-none">
                      <PortableText value={post.content} />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold text-charcoal mb-2">
              No blog posts yet
            </h3>
            <p className="text-charcoal/70 mb-6">
              Blog posts about {film.title} will appear here once they are published.
            </p>
            <Button asChild variant="outline">
              <Link href={`/films/${film.slug.current}`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Film Details
              </Link>
            </Button>
          </div>
        )}
      </div>
    </>
  )
} 