const Order = () => {
  return (
    <section className="sm:grid sm:grid-cols-2 sm:items-center bg-[#fffbf5] pt-10 pb-16">
      <div className="hidden sm:grid sm:place-items-center">
        <img src="/images/Order.svg" alt="" className="h-[400px]" />
      </div>
      <div className="px-5 py-5 lg:w-[35rem]">
        <div className="space-y-5">
          <p className="font-bold text-yellow-400 text-2xl">Take Away</p>
          <h1 className="text-5xl font-bold">Simple Way to Order Your Food</h1>
          <p className="text-xl">
            Keep Healthy food readily available. When you get hungry more likely
            to eat the first thing you see the counter of of cupboard.
          </p>
          <div className="flex items-center">
            <img src="/images/Play.png" alt="" className="h-14 shadow-lg" />
            <img src="/images/App.png" alt="" className="h-10 shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
