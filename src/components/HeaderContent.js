import Button from "./Button";

const HeaderContent = () => {
  return (
    <>
      <div className="px-5 sm:px-0">
        <div className="pt-5 lg:pt-16 flex flex-col items-start space-y-5">
          <h1 className="text-6xl sm:text-5xl lg:text-9xl font-thin font-sans">
            G<span className="text-yellow-500">oo</span>d
            <span className="text-yellow-500 font-thin"> Food.</span>
          </h1>
          <h1 className=" text-6xl font-thin sm:text-4xl lg:text-8xl py-2">
            Book <span className="font-thin text-green-600">Now</span>{" "}
          </h1>
          <p className="text-gray-600 font-mono text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            quibusdam quasi, in nobis pariatur non.
          </p>
          <Button>Expolore Food Menu</Button>
        </div>
      </div>
      <div className="mr-10 mt-5 sm:mr-0 sm:mt-0">
        <div className="sm:grid sm:place-items-end">
          <img src="/images/HeroOne.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default HeaderContent;
