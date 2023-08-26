import { shoe4, shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <div className="w-full flex flex-col justify-start gap-x-10">
            <div className="flex max-md:flex-col justify-center items-center gap-10">
                <div className="w-[50%] max-md:w-full flex flex-col justify-start items-start gap-y-4">
                <p className="text-4xl font-semibold">
                We Provide You
                <span className="text-coral-red"> Super Quality </span>
                Shoes
                </p>

                <p className="text-lg my-3">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation and a touch of elegence.</p>

                <p className="text-lg my-2">Our dedication to detail and excellence ensures your satisfaction</p>
                
                
                </div>

                <div>
                  <img src={shoe8} width={500} height={500} alt="shoes" className="object-contain"/>
                </div>
            </div>
    </div>
  )
}

export default SuperQuality