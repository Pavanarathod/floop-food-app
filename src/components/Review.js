import Button from "./Button";

const Review = () => {
  return (
    <section className="sm:grid sm:grid-cols-2 sm:items-center pt-10 pb-16">
      <div className="px-5 py-5 lg:w-[35rem]">
        <div className="space-y-5">
          <p className="font-bold text-yellow-400 text-2xl">Testimonial</p>
          <h1 className="text-5xl font-bold">Thats What Our Client Says.</h1>
          <p className="text-xl">
            &ldquo; Floood is an awesome place, Food is everything we are. it's
            an extension of nationalist feeling, ethic feeling your personal,
            history your praiance.&ldquo;
          </p>
          <div>
            <h1 className="text-lg text-gray-700 font-semibold">
              Jessica Parker
            </h1>
            <p className="text-yellow-400 font-bold">Product designer @kitty</p>
          </div>
          <div>
            <Button>Leave a Comment</Button>
          </div>
        </div>
      </div>
      <div className="hidden sm:grid sm:place-items-end">
        <img src="/images/ReviewOne.png" alt="" className="" />
      </div>
    </section>
  );
};

export default Review;
