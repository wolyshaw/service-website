import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import ArticleList from '@/app/components/ArticleList'

export default function ArticlesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-1 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
            文章与洞察
          </h1>
          <ArticleList />
        </div>
      </main>

      <Footer />
    </div>
  )
}
