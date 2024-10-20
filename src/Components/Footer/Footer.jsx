import React from 'react';

const Footer = () => {
  return (
    <section className="relative pt-20 pb-8 overflow-hidden bg-white">
      <img
        className="absolute top-0 left-0 min-w-max xs:min-w-0 w-112 xs:w-full h-full"
        src="saturn-assets/images/footers/background-dark.png"
        alt=""
      />
      <div className="relative container px-4 mx-auto">
        <div className="max-w-3xl mb-24 sm:mb-52 pr-8 sm:pr-0">
          <h1 className="font-heading text-4xl xs:text-5xl md:text-6xl font-semibold text-black mb-20">
            <span>"हमसे जुड़ें और मथुरा को 



</span>
            <span className="font-serif italic">राम राज्य बनाने का संकल्प पूरा करें।"</span>
            <span className='text-orange-600 italics'>राम राज्य बनाने का संकल्प पूरा करें।"</span>
          </h1>
          <div className="sm:flex items-center">
            <div className="sm:flex mb-6 sm:mb-0 sm:mr-12 items-center">
              <div className="flex mb-3 sm:mb-0 sm:mr-3 items-center justify-center w-12 h-12 bg-white rounded-full">
                <img
                  src="saturn-assets/images/footers/map-pin-light.svg"
                  alt=""
                />
              </div>
              <div>
                <span className="block text-gray-900"></span>
                <span className="block text-gray-900"></span>
              </div>
            </div>
            <div className="sm:flex items-center">
              <div className="flex mb-3 sm:mb-0 sm:mr-3 items-center justify-center w-12 h-12 bg-white rounded-full">
                <img
                  src="saturn-assets/images/footers/envelope-light.svg"
                  alt=""
                />
              </div>
              <div>
                <span className="block text-gray-900"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t-2 border-gray-400 border-opacity-50">
          <div className="sm:flex items-center justify-between">
            <span className="inline-block mb-4 sm:mb-0 text-gray-900">© सभी अधिकार सुरक्षित</span>
            <div className="sm:flex mb-6 sm:mb-0 items-center">
              <a className="inline-block mr-6 sm:mr-12 text-gray-600 hover:text-gray-800" href="#">
                शर्तें और नियम
              </a>
              <a className="inline-block text-gray-600 hover:text-gray-800" href="#">
                गोपनीयता नीति
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
