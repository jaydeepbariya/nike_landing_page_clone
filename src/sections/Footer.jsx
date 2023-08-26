import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants/constants"

const Footer = () => {
  return (
    <footer className="w-full pb-14 flex flex-col justify-start gap-x-10">
        <div className="flex justify-center items-center gap-20 flex-wrap md:flex-col">
            <div className="flex flex-col items-start">
                <a href="/" className="mx-auto"><img src={footerLogo} width={150} height={50} alt="footer logo"/></a>
                <p className="mt-6 text-center">Make shoes ready for the new term at your nearest Nike store. Find your perfect size in store. Get rewards.</p>

                <div className="flex items-center justify-center mx-auto gap-5 mt-8">
                  {
                    socialMedia.map((icon)=>(
                        <img src={icon.src} alt={icon.alt} width={25} height={25}/>
                    ))
                  }
                </div>

                <div className="flex mx-auto mt-8 justify-between lg:gap-10 gap-20 flex-wrap">
                  {
                    footerLinks.map((section)=>(
                      <div key={section}>
                          <h4 className="font-bold my-4 text-lg">{section.title}</h4>
                          <ul className="my-3">
                            {
                              section.links.map((link)=>(
                                <li><a href={link.link}>{link.name}</a></li>
                              ))
                            }
                          </ul>
                      </div>
                    ))
                  }
                </div>

            </div>

            <div className="mt-20 mx-auto">
                  <p className="text-center">All Rights Reserved. 2023. Made By Jaydeep Bariya</p>
            </div>
        </div>
    </footer>

  )
}

export default Footer