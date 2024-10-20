import React from 'react';
import { Link } from 'react-router-dom'; // Import Link


const BusinessSection = () => {
  return (
    <section className="py-10 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="py-16 px-8 md:px-16 bg-white rounded-3xl">
          <div className="flex flex-wrap -m-8">
            <div className="w-full md:w-1/2 p-8">
              <img
                className="mx-auto md:ml-0 rounded-3xl"
                src="https://i.postimg.cc/ZRv45PWd/12.jpg"
                alt="Business"
              />
            </div>
            <div className="w-full md:w-1/2 p-8">
              <div className="md:max-w-md">
                <span className="inline-block mb-5 text-sm text-orange-500 font-bold uppercase tracking-widest">
                  "दिनेश महाराज जी"
                </span>
                <h2 className="font-heading mb-4 text-4xl text-gray-900 font-black tracking-tight">
                  <span>"सबका साथ, </span>
                  <span className="text-orange-500">सबका विकास"</span>
                </h2>
                <p className="mb-16 font-bold">
                  "आइए और हमारे साथ जुड़ें, ताकि मथुरा को कृष्ण नगरी बना सकें।"
                </p>
                <div className="flex flex-wrap -m-2">
                  <div className="w-auto p-2">
                    <div className="flex flex-wrap px-3 py-2 bg-gray-100 rounded-full">
                      <div className="w-auto mr-2 pt-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                            fill="#FFA500" // Orange color for the icon
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900 font-bold">"मात्र 101 रुपए में आजीवन सदस्य बने"</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto p-2">
                    <div className="flex flex-wrap px-3 py-2 bg-gray-100 rounded-full">
                      <div className="w-auto mr-2 pt-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                            fill="#FFA500" // Orange color for the icon
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900 font-bold">"मथुरा को कृष्ण नगरी बनाने का संकल्प"</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto p-2">
                    <div className="flex flex-wrap px-3 py-2 bg-gray-100 rounded-full">
                      <div className="w-auto mr-2 pt-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                            fill="#FFA500" // Orange color for the icon
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900 font-bold">कृष्ण भक्ति का प्रचार:</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto p-2">
                    <div className="flex flex-wrap px-3 py-2 bg-gray-100 rounded-full">
                      <div className="w-auto mr-2 pt-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                            fill="#FFA500" // Orange color for the icon
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900 font-bold">"सभी उम्र के लोगों के लिए भक्ति के कार्यक्रम"</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto p-2">
                    <div className="flex flex-wrap px-3 py-2 bg-gray-100 rounded-full">
                      <div className="w-auto mr-2 pt-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                            fill="#FFA500" // Orange color for the icon
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900 font-bold">"कृष्ण भक्तों के साथ संपर्क बढ़ाना"</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
  to="/Form"
  className="mt-6 inline-block px-8 py-3 bg-orange-500 text-white font-bold rounded-full transition duration-200 hover:bg-orange-600"
>
  "अभी जुड़ें"
</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
