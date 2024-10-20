import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this is at the top of your file

const CallToAction = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap -mx-4">
            {/* Left Side */}
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <div className="max-w-md lg:max-w-xl mx-auto lg:mx-0">
                <span className="inline-block py-2 px-3 mb-10 text-xs bg-orange-50 text-orange-900 font-semibold rounded-full">
                  "आज ही जुड़ें और हमारी सामुदायिक यात्रा का हिस्सा बनें!"
                </span>
                <h2 className="font-heading text-5xl xs:text-6xl font-bold text-gray-900 mb-10">
                  <span>"आज ही हमारे साथ जुड़ें और </span>
                  <span className="font-serif italic">सफलता की नई </span>
                  <span>ऊँचाइयों को छुएं!"</span>
                </h2>

                {/* Email Input with Link Button */}
                <div className="flex p-1.5 max-w-sm items-center border border-gray-200 rounded-lg">
                  <input
                    className="w-full py-1 px-4 rounded-lg bg-transparent text-sm text-gray-500 outline-none"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <Link
                    to="/Form"
                    className="relative group flex-shrink-0 inline-block py-2 px-4 text-xs font-semibold text-orange-50 rounded-md bg-orange-900 overflow-hidden"
                  >
                    <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                    <span className="relative">आज हे जुड़े"</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* Right Side */}
            <div className="w-full lg:w-1/2 px-4">
              <img
                className="block w-full max-w-md lg:max-w-sm mx-auto lg:mr-0"
                src="https://i.postimg.cc/90wkj0Rc/e.jpg"
                alt="CTA Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
