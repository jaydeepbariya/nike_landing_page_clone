import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants/constants"

const CustomerReviews = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start gap-x-10">
      <div className="flex flex-col justify-center items-center gap-10">
          <div className="w-[50%] text-center">
          <p className="text-4xl font-semibold">What Our <span className="text-coral-red">Customers </span> Say?</p>
          <p className="my-6 text-xl">Hear genuine stories from our satisfied customers about their exceptional experiences with us</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-10">
            {
              reviews.map((review)=>(
                <ReviewCard review={review} key={review.customerName} />
              ))
            }
          </div>
      </div>
      </div>
  )
}

export default CustomerReviews