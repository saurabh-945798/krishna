import React from "react";

const BusinessSection = () => {
  return (
    <section className="py-10 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="py-16 px-8 bg-white rounded-3xl">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading max-w-xl mb-20 text-4xl md:text-5xl text-gray-900 font-black tracking-tight">
            "हमसे <span className="text-orange-600 italic">जुड़ने</span> के लिए"
            </h2>
            <div className="flex flex-wrap -m-3">
              {/* Item 1 */}
              <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                <div className="flex flex-wrap items-center -m-3 mb-2">
                  <div className="w-auto p-3">
                    <div className="flex items-center justify-center w-16 h-16 text-xl text-gray-900 font-black bg-gray-100 rounded-full">
                      1
                    </div>
                  </div>
                  <div className="flex-1 p-3">
                    <div className="bg-gray-200 h-px"></div>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-heading mb-4 text-2xl text-gray-900 italic font-bold">सदस्यता लाभ

</h3>
                  <p className="text-gray-700 font-bold">
                  हमारे संगठन के सदस्य बनकर आपको विशेष छूट और लाभ मिलेंगे।
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                <div className="flex flex-wrap items-center -m-3 mb-2">
                  <div className="w-auto p-3">
                    <div className="flex items-center justify-center w-16 h-16 text-xl text-white font-black bg-orange-500 rounded-full">
                      2
                    </div>
                  </div>
                  <div className="flex-1 p-3">
                    <div className="bg-gray-200 h-px"></div>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-heading mb-4 text-2xl text-gray-900 font-bold italic">समुदाय में शामिल हों</h3>
                  <p className="text-gray-700 font-bold">
                  हमारे सदस्यों के बीच नेटवर्किंग और सहयोग के अवसर मिलेंगे।
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                <div className="flex flex-wrap items-center -m-3 mb-2">
                  <div className="w-auto p-3">
                    <div className="flex items-center justify-center w-16 h-16 text-xl italic text-gray-900 font-black bg-gray-100 rounded-full">
                      3
                    </div>
                  </div>
                  <div className="flex-1 p-3">
                    <div className="bg-gray-200 h-px"></div>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-heading mb-4 text-2xl text-gray-900 italic font-bold">सामाजिक कार्य</h3>
                  <p className="text-gray-700 font-bold">
                  हमारे साथ सामाजिक कार्यों में भाग लें और समाज में सकारात्मक बदलाव लाने में मदद करें।
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                <div className="flex flex-wrap items-center -m-3 mb-2">
                  <div className="w-auto p-3">
                    <div className="flex items-center justify-center w-16 h-16 text-xl text-gray-900 font-black bg-gray-100 rounded-full">
                      4
                    </div>
                  </div>
                  <div className="flex-1 lg:hidden p-3">
                    <div className="bg-gray-200 h-px"></div>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-heading mb-4 text-2xl text-gray-900 italic font-bold">सहायता और समर्थन</h3>
                  <p className="text-gray-700 font-bold">
                  सदस्यों को हमेशा सहायता और मार्गदर्शन उपलब्ध कराया जाएगा।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
