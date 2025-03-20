import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import ArticleContent from '@/app/components/ArticleContent'

export default function ArticlePage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-1 pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <ArticleContent slug={params.slug} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
