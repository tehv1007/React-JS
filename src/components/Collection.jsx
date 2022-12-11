import React from "react";

const Collection = () => {
  return (
    <section className="py-8 px-4 sm:py-12 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
      <div className="text-center leading-6">
        <h4 className="text-xl font-bold text-gray-900 sm:text-3xl">
          New Collection
        </h4>
        <p className="mt-4 mb-0 text-gray-500 max-w-md mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
          natus?
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
        {/* product */}
        <div className="">
          <a href="#" className="relative group">
            <img
              src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              className="aspect-square object-cover w-full transition duration-500 group-hover:opacity-90"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
              <h5 className="font-medium text-xl text-white">
                Casual Trainers
              </h5>
              <button className="uppercase text-xs py-3 px-5 mt-1.5 bg-black text-white font-medium tracking-wide">
                Shop now
              </button>
            </div>
          </a>
        </div>
        {/* product */}
        <div className="">
          <a href="#" className="relative group">
            <img
              src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              className="aspect-square object-cover w-full transition duration-500 group-hover:opacity-90"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
              <h5 className="font-medium text-xl text-white">Winter Jumpers</h5>
              <button className="uppercase text-xs py-3 px-5 mt-1.5 bg-black text-white font-medium">
                Shop now
              </button>
            </div>
          </a>
        </div>
        {/* product */}
        <div className="lg:row-span-2 lg:col-span-2 lg:col-start-2 lg:row-start-1">
          <a href="#" className="relative group">
            <img
              src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
              alt=""
              className="aspect-square object-cover w-full transition duration-500 group-hover:opacity-90"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
              <h5 className="font-medium text-xl text-white">
                Skinny Jeans Blue
              </h5>
              <button className="uppercase text-xs py-3 px-5 mt-1.5 bg-black text-white font-medium">
                Shop now
              </button>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Collection;
