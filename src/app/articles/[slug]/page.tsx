import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import ArticleContent from '@/app/components/ArticleContent'
import { Metadata, ResolvingMetadata } from 'next'

type Params = Promise<{ slug: string }>

export default async function ArticlePage({ params }: { params: Params }) {
  const resolvedParams = await params
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-1 pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <ArticleContent slug={resolvedParams.slug} />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function generateMetadata(
  { params }: { params: Params },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: `文章 - ${resolvedParams.slug}`,
    description: '创禾聚力技术文章',
    openGraph: {
      images: [...previousImages]
    }
  }
}
