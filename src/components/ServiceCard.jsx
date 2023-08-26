
const ServiceCard = ({imgUrl, subtext,label}) => {

  return (
    <div className="w-[300px] sm:min-h-[300px] rounded-lg shadow-xl p-4 flex flex-col items-start justify-center">
    <img src={imgUrl} width={50} height={50} />
    <p className="text-2xl font-semibold mt-3 mb-1">{label}</p>
    <p className="text-lg mt-3 mb-3">{subtext}</p>
    </div>
  )
}

export default ServiceCard