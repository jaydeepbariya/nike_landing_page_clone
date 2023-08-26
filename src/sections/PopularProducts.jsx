import ProductCard from "../components/ProductCard"
import { products } from "../constants/constants"

const PopularProducts = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start gap-10">
            <div className="flex flex-col justify-start items-start">
              <p className="text-4xl font-semibold mt-10">Our <span className="text-coral-red">Popular</span> Products</p>
              <p className="mt-6 mb-4 text-lg">Experience top notch quality and style with our sought-after selections. Discover a world of comfort, design and value.</p>
            </div>

            <div className="flex justify-between items-center gap-x-6 max-md:flex-col max-md:gap-y-6">
              {
                products.map((shoes)=>(
                  <ProductCard shoes={shoes} index={shoes.imgURL}/>
                ))
              }
            </div>
    </div>
  )
}

export default PopularProducts