import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Works from '../components/Works'
import Carousel from '../components/Carousel'

export default function CasesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <div className="relative">

          <Carousel
            images={[
              "/carousel/slide1.jpg",
              "/carousel/slide2.jpg",
              "/carousel/slide3.jpg",
              "/carousel/slide4.jpg",
              "/carousel/slide5.jpg"
            ]}
          />
        </div>

      <main className="max-w-5xl w-full mx-auto shadow-xl ring ring-gray-200 rounded px-7 -mt-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12 pt-8">
          <div className='text-[#112e82] flex items-center'>
            <span className='text-5xl font-bold'>CASE</span>
            <span className='inline-block ml-20 text-3xl font-light'>作品案例</span>
          </div>

          <Works />
        </div>
      </main>

      <Footer />
    </div>
  )
}
