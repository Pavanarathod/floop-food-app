const HeaderContent = () => {
  return (
    <>
      <div className="px-5 sm:px-0">
        <div className="pt-5 lg:pt-16 flex flex-col items-start space-y-5">
          <h1 className="text-6xl sm:text-5xl lg:text-9xl font-semibold font-sans">
            Good <span className="text-yellow-400 font-thin">Food</span>{" "}
          </h1>
          <h1 className=" text-6xl sm:text-4xl lg:text-8xl">
            For <span className="font-thin text-green-600">Mood</span>{" "}
          </h1>
          <p className="text-yellow-400 font-mono text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            quibusdam quasi, in nobis pariatur non.
          </p>
          <button className="lg:py-5 py-3  font-mono outline-none px-5 lg:px-7 bg-yellow-500 text-white rounded-full">
            Expolore Food Menu
          </button>
        </div>
      </div>
      <div className="">
        <div className="sm:grid sm:place-items-end">
          <img src="/images/HeroOne.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default HeaderContent;
