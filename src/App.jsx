import CustomerReviews from './sections/CustomerReviews';
import Footer from './sections/Footer';
import HeroSection from './sections/HeroSection';
import Navbar from './components/Navbar';
import Services from './sections/Services';
import SpecialOffers from './sections/SpecialOffers';
import Subscribe from './sections/Subscribe';
import SuperQuality from './sections/SuperQuality';
import PopularProducts from './sections/PopularProducts';

const App = () => {
  return (
    <div className='w-[100vw] h-[100vh] overflow-y-auto overflow-x-hidden'>
        <section className='py-4 px-8'>
          <Navbar />
        </section>
        <section className='py-4 px-8'>
          <HeroSection />
        </section>
        <section className='py-4 px-8'>
          <PopularProducts />
        </section>
        <section className='py-4 px-8'>
          <SuperQuality />
        </section>
        <section className='py-4 px-8'>
          <Services />
        </section>
        <section className='py-4 px-8'>
          <SpecialOffers />
        </section>
        <section className='py-4 px-8'>
          <CustomerReviews />
        </section>
        <section className='py-4 px-8'>
          <Subscribe />
        </section>
        <section className='py-4 px-8 bg-black text-white'>
          <Footer />
        </section>
    </div>
  )
}

export default App;