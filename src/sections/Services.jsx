import ServiceCard from "../components/ServiceCard"
import { services } from "../constants/constants"

const Services = () => {
    return (
      <div className="w-full flex flex-col justify-start my-20">
          <div className="flex max-md:flex-col justify-center items-center gap-10">
            {
              services.map((service)=>(
                <ServiceCard imgUrl={service.imgURL} label={service.label} subtext={service.subtext} key={service.label} />
              ))
            }
          </div>

      </div>
  )
}

export default Services