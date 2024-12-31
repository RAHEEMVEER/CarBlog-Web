import React from "react";

export default function page() {
  return (
    <section className="pt-5 md:pt-10 pb-14 px-2 md:px-14 min-h-[90vh] w-full">
      <div className="w-full flex justify-center items-center"></div>
      <div className="flex justify-center">
        <div className="w-full md:w-[75%]">
          {/* About us */}
          <div>
            <h1 className="text-lg sm:text-xl font-semibold">About Us !</h1>
            <p className="mt-2 text-sm sm:text-base">Welcome to "Car Dealing Experience", where innovation meets excellence. Our platform is dedicated to delivering an unmatched experience for our customers by offering With a deep commitment to quality and customer satisfaction, we strive to make every interaction seamless, efficient, and enjoyable.</p>
          </div>

          {/* Our Mission */}
          <div className="mt-6 sm:mt-8">
            <h1 className="text-lg sm:text-xl font-semibold">Our Mission:</h1>
            <p className="mt-2 text-sm sm:text-base">At "Car Dealing Experience", our mission is simple yet impactful: to revolutionize the way is experienced. We aim to provide products and services that not only meet but exceed our customers' expectations, ensuring they always find value in choosing us.</p>
          </div>

          {/* our Goal */}
          <div className="mt-6 sm:mt-8">
            <h1 className="text-lg sm:text-xl font-semibold">Our Goals:</h1>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li className="text-sm sm:text-base"><span className="font-semibold mr-2">Customer-Centric Approach:</span>Ensuring every decision we make keeps the customer's needs at the forefront.</li>
              <li className="text-sm sm:text-base"><span className="font-semibold mr-2">Innovation:</span>Continuously improving and adopting the latest advancements to enhance the customer experience.</li>
              <li className="text-sm sm:text-base"><span className="font-semibold mr-2">Sustainability:</span>Building a future-ready platform with environmentally conscious practices wherever possible.</li>
              <li className="text-sm sm:text-base"><span className="font-semibold mr-2">Excellence:</span>Delivering unparalleled quality in every product and service we offer.</li>
            </ol>
          </div>

          {/* why Choose us */}
          <div className="mt-6 sm:mt-8">
            <h1 className="text-lg sm:text-xl font-semibold">Why Choose Us?</h1>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li className="text-sm sm:text-base"><span className="font-semibold mr-2 ml-[-7px]">Unmatched Quality:</span>We pride ourselves on offering only the best, with meticulous attention to detail.</li>
              <li className="text-sm sm:text-base"><span className="font-semibold mr-2 ml-[-7px]">Transparency:</span>Our processes are clear and straightforward, ensuring trust at every step.</li>
              <li className="text-sm sm:text-base"><span className="font-semibold mr-2 ml-[-7px]">Exceptional Support:</span>A dedicated team ready to assist you whenever needed.</li>
              <li className="text-sm sm:text-base"><span className="font-semibold mr-2 ml-[-7px]">Value-Driven:</span>Combining competitive prices with premium offerings for the ultimate value.</li>
            </ul>
          </div>

          {/* Join Us */}
          <div className="mt-6 sm:mt-8">
            <h1 className="text-lg sm:text-xl font-semibold">Join Us on This Journey.</h1>
            <p className="mt-2 text-sm sm:text-base">We invite you to become a part of our growing community of satisfied customers. Whether you're here to finding your dream car or exploring innovative solutions, we’re committed to making your experience unforgettable. Thank you for trusting "Car Dealing Experience" to be your partner in this journey.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
