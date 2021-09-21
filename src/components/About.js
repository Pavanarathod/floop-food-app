import Button from "./Button";

const About = () => {
  return (
    <section className="py-10 lg:py-14 bg-[#fffbf5] sm:grid sm:grid-cols-2">
      <div className="hidden sm:grid sm:place-items-center">
        <img src="/images/About.png" alt="image" className="lg:h-[350px]" />
      </div>
      <div className="px-5 py-5 lg:w-[35rem] lg:grid lg:place-content-center">
        <div className="flex flex-col items-start space-y-5">
          <p className="text-yellow-400 font-bold text-2xl">About Us</p>
          <h1 className="font-semibold text-6xl">
            Simple Way of Eating Delicias
          </h1>
          <p className="text-xl">
            Eating healthy food readliy available. When you get hungry, you're
            more likely to eat the first thing you see on the counter or in the
          </p>
          <Button>Explore Our Story</Button>
        </div>
      </div>
    </section>
  );
};

export default About;
