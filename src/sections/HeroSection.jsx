import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { shoes, statistics } from "../constants/constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row justify-start gap-10">
      <div className="ml-12 flex flex-col justify-start items-start">
        <p className="font-montserrat mt-12 font-semibold text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="text-8xl font-semibold">
          <span>The New Arrival</span>
          <br />
          <span className="text-coral-red"> Nike </span>
          Shoes
        </h1>
        <p className="mt-8 mb-4 text-lg">
          Discover stylish Nike Arrivals, quality comfort and innovation for
          your active life
        </p>

        <Button label="Shop Now" iconUrl={arrowRight} />

        <div className="flex justify-start items-center mt-20 flex-wrap gap-16">
          {statistics.map((stat) => (
            <div key={stat.label} className="flex-col text-center">
              <p className="font-montserrat font-bold text-3xl uppercase">
                {stat.value}
              </p>
              <p className="font-montserrat font-semibold text-xl">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-col justify-center items-start pt-12 xl:min-h-screen">
        <img
          src={bigShoe1}
          alt="BigShoeImage"
          width={510}
          height={450}
          className="object-contain z-1"
        />
        <div className="mt-10 mr-6 max-md:mx-auto flex justify-center items-center gap-10">
          {shoes.map((shoe) => (
            <div key={shoe} className="border-2 p-4 rounded-md bg-slate-400">
              <img
                src={shoe.thumbnail}
                width={130}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
