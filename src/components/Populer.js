import { populer } from "../utils/Populer";
import Button from "./Button";

const Populer = () => {
  return (
    <section className="py-10 bg-[#fffbf5]">
      <div className="py-10 flex flex-col justify-center items-center space-y-3">
        <p className="font-bold text-yellow-400 text-3xl">Recipes</p>
        <h1 className=" text-3xl lg:text-5xl font-semibold">
          Most Populer Items
        </h1>
      </div>
      <div className="px-10 space-y-5 sm:space-y-0 sm:grid sm:grid-cols-3 lg:px-20 sm:gap-16">
        {populer.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg hover:shadow-xl hover:cursor-pointer rounded-xl"
          >
            <div className="grid place-items-center py-2">
              <img
                src={item.image}
                alt="image"
                className="h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] object-contain"
              />
            </div>
            <div className="px-5">
              <div className="py-2">
                <h1 className="text-lg font-medium">{item.title}</h1>
              </div>
              <div className="flex justify-between pb-3">
                <button className="px-3 rounded-full bg-gray-300 text-xs py-1">
                  Add to cart
                </button>
                <p className="italic text-yellow-400 text-base font-bold">
                  {item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="py-20 flex justify-center">
        <Button>See More Recipes</Button>
      </div>
    </section>
  );
};

export default Populer;
