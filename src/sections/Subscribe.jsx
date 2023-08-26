import Button from "../components/Button";

const Subscribe = () => {
  return (
    <div className="w-full mb-20 flex flex-col justify-start gap-x-10">
      <div className="flex max-md:flex-col justify-center items-center gap-10">
          <p className="text-4xl font-semibold max-md:text-center">
            Sign Up for <span className="text-coral-red">Updates </span>
            <br />& Newsletter
          </p>

        <div className="flex gap-x-6 max-lg:flex-col max-lg:gap-5">
          <input type="text" className="min-w-[300px] rounded-full ring-1"/>
          <Button label={"Sign Up"} className="absolute -right-10"/>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
