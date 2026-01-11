import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-6 gap-8 p-8">
          {Array.from({ length: 24 }).map((_, i) => (
            <Image
              key={i}
              src="/Andrew Rentz-logos_black.png"
              alt=""
              width={150}
              height={150}
              className="w-full h-auto"
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Profile Photo */}
        <div className="flex justify-center mb-12">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
            <Image
              src="/IMG_1793.PNG"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Products Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow flex flex-col">
              <div className="relative h-64 bg-gray-50">
                <Image
                  src="/1.png"
                  alt="Excel Business Plan - Cirrus SR22 G6"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Excel Business plan - Cirrus SR22 G6
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  A fully versatile dynamic spreadsheet complete with financing, fixed and variable cost, total hourly cost breakdowns and much more. This spreadsheet is great for any hobbyist looking to dive deeper into Cirrus ownership or maybe you are ready to buy a Cirrus yourself. This sheet is packed with all the essential Cirrus information you need, meticulously organized and easy to use. This spreadsheet is complete with the assumptions used for Cirrus N374RL.
                </p>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-gray-400 line-through text-lg">$14.99</span>
                  <span className="text-3xl font-bold text-green-600">$9.99</span>
                </div>
                <a
                  href="#"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg text-center transition-colors shadow-md hover:shadow-lg"
                >
                  Download Now
                </a>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow flex flex-col">
              <div className="relative h-64 bg-gray-50">
                <Image
                  src="/3.png"
                  alt="Excel Business Plan - General Airplane Cost"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Excel Business plan - General Airplane Cost
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  This tool is the prefect solution if you are on the fence about getting an airplane. This spreadsheet will give you the opportunity to run the numbers in different scenarios. A fully versatile dynamic spreadsheet complete with financing, fixed and variable cost, total hourly cost breakdowns and much more. This tool is not tailored to any specific aircraft, making it the perfect solution for a wide range of general aviation needs.
                </p>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-gray-400 line-through text-lg">$14.99</span>
                  <span className="text-3xl font-bold text-green-600">$9.99</span>
                </div>
                <a
                  href="#"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg text-center transition-colors shadow-md hover:shadow-lg"
                >
                  Download Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
