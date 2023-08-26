import { arrowRight } from "../assets/icons";
import { offer, shoe8 } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <div className="w-full mb-20 flex flex-col justify-start gap-x-10">
      <div className="flex flex-row-reverse max-md:flex-col-reverse justify-center items-center gap-10">
        <div className="w-[50%] max-md:w-full flex flex-col justify-start items-start gap-y-4">
          <p className="text-4xl font-semibold">
            <span className="text-coral-red"> Special </span>
            Offer
          </p>

          <p className="text-lg my-4">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalled value that sets us apart.
          </p>

          <p className="text-lg my-3">
            Navigate a realm of possibilities designed to fulfil your unique
            desires, surpassing the loftiest expections. Your journey with us is
            nothing short of exceptional.
          </p>

          <div className="flex max-md:flex-col gap-10 mt-5">
            <Button label="Shop Now" iconUrl={arrowRight} />
            <Button label="Learn More" active={true} />
          </div>
        </div>

        <div>
          <img
            src={offer}
            width={600}
            height={600}
            alt="shoes"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
