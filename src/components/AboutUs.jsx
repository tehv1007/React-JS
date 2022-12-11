import React from "react";

const AboutUs = () => {
  return (
    <div className="px-4 py-16 max-w-screen-xl mx-auto sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last">
          <img
            src="https://plus.unsplash.com/premium_photo-1664202526336-9edbfc8e2886?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHNob3B8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="absolute inset-0 object-cover h-full w-full"
          />
        </div>
        <div className="lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">About Us</h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
            hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
            minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
          </p>
          <a
            href="#"
            className="text-white bg-[#4f46e5] border-[#4f46e5] py-3 px-8 mt-8 rounded border items-center inline-flex hover:bg-transparent hover:text-[#4f46e5]">
            <span className="text-sm font-medium">Know more</span>
            <svg
              class="ml-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
